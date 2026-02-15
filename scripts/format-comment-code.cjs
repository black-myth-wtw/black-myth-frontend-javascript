/**
 * 格式化 basic 目录下所有 .js/.mjs 文件中注释里的代码（// 开头的行）。
 * 将连续注释行中可解析为 JS 的内容用 Prettier 格式化后写回，每行前加 "// "。
 */
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const BASIC_DIR = path.join(__dirname, '..', 'basic');

function getAllJsFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) getAllJsFiles(full, list);
    else if (/\.(js|mjs)$/.test(e.name)) list.push(full);
  }
  return list;
}

/** 判断一行注释是否像代码（含常见 JS 符号或关键字） */
function looksLikeCode(line) {
  const t = line.replace(/^\s*\/\/\s?/, '').trim();
  if (!t) return false;
  return (
    /[;{}\[\]=()`'"]/.test(t) ||
    /^\s*(import|export|const|let|var|function|return|if|for|while|=>|class|async)\b/.test(t) ||
    /\b(console|Promise|await)\b/.test(t)
  );
}

/** 从一行注释中取出“注释内容”（去掉 // 及后面一个空格） */
function stripCommentPrefix(line) {
  const m = line.match(/^(\s*)(\/\/)\s?(.*)$/);
  if (!m) return line;
  return m[1] + m[3]; // 保留行首空白，去掉 // 及一个空格
}

/** 对一段“注释里的代码”字符串用 Prettier 格式化，失败返回 null */
async function formatCommentCode(code, filePath) {
  const parser = 'babel';
  try {
    const out = await prettier.format(code, {
      parser,
      printWidth: 80,
      semi: true,
      singleQuote: true,
    });
    return typeof out === 'string' ? out : null;
  } catch {
    return null;
  }
}

async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\n/);
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    // 收集连续以 // 开头的行
    if (line.match(/^\s*\/\//)) {
      const blockLines = [];
      while (i < lines.length && lines[i].match(/^\s*\/\//)) {
        blockLines.push(lines[i]);
        i++;
      }
      const hasCode = blockLines.some((l) => looksLikeCode(l));
      if (!hasCode || blockLines.length === 0) {
        out.push(...blockLines);
        continue;
      }
      const rawCode = blockLines.map(stripCommentPrefix).join('\n');
      const formatted = await formatCommentCode(rawCode.trim(), filePath);
      if (formatted && typeof formatted === 'string') {
        const formattedLines = formatted.trimEnd().split('\n');
        for (const fl of formattedLines) {
          out.push(fl ? '// ' + fl : '//');
        }
      } else {
        out.push(...blockLines);
      }
      continue;
    }
    out.push(line);
    i++;
  }

  const newContent = out.join('\n');
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  return false;
}

async function main() {
  const files = getAllJsFiles(BASIC_DIR);
  let changed = 0;
  for (const f of files) {
    try {
      if (await processFile(f)) {
        changed++;
        console.log('Formatted comments:', f);
      }
    } catch (err) {
      console.error('Error processing', f, err.message);
    }
  }
  console.log('Done. Files with formatted comment code:', changed);
}

main();
