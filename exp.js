let jsPsych = initJsPsych();
// 指导语
let instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <p>在实验中，屏幕中央会呈现一个圆形</p>
    <p>如果呈现的是蓝色圆形，请尽快按 F 键</p>
    <p>如果呈现的是橙色圆形，请尽快按 J 键</p>
    <p>按任意键开始实验</p>
    `,
    post_trial_gap: 500
}
// 蓝色圆
let blue_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<img src="C:/online experiment/One/images/blue.png">`,
    choices: ['f','j'],
    post_trial_gap: 500
}

// 橙色圆
let orange_trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<img src="C:/online experiment/One/images/orange.png">`,
    choices: ['f','j'],
    post_trial_gap: 500
}
jsPsych.run([
    instruction,
    blue_trial, orange_trial, blue_trial, orange_trial, blue_trial, orange_trial
])