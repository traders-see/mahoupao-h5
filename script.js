const input = document.getElementById("troubleInput");
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");
const counter = document.getElementById("counter");

const openers = [
  "AI 已就位：",
  "黑色幽默播报：",
  "来自毒舌宇宙的回复：",
  "你的电子闺蜜（嘴最损版）说：",
];

const templates = [
  "你这点烦恼像 Wi-Fi 信号，吓人但不稳定。先吃饭，世界不会因为你叹气就自动升级。",
  "{topic} 听起来确实离谱，不过你都扛到现在了，说明你比剧情还抗打。",
  "生活给你出了道难题，你先别交白卷。反正最差也就这样，再差就可以写段子挣钱了。",
  "别怕，{topic} 不是终局，只是今天的隐藏关卡。通关奖励叫“脸皮更厚，心态更稳”。",
  "成年人崩溃的顺序一般是：沉默、微笑、点奶茶。你已经走到哪一步了？",
  "你现在像被命运追着跑，但放心，命运也有业绩压力，它跑不过你长期摆烂。",
];

function buildRoast(topic) {
  const opener = openers[Math.floor(Math.random() * openers.length)];
  const template = templates[Math.floor(Math.random() * templates.length)];
  return `${opener}\n${template.replaceAll("{topic}", `“${topic}”`)}`;
}

function updateCounter() {
  counter.textContent = `${input.value.length} / 120`;
}

input.addEventListener("input", updateCounter);

button.addEventListener("click", () => {
  const topic = input.value.trim();
  if (!topic) {
    result.textContent = "先输入烦恼。AI 再毒舌，也不能对空气开麦。";
    return;
  }

  button.disabled = true;
  button.textContent = "AI 正在组织伤害性语言...";

  window.setTimeout(() => {
    result.textContent = buildRoast(topic);
    button.disabled = false;
    button.textContent = "再来一条毒舌文案";
  }, 450);
});

updateCounter();
