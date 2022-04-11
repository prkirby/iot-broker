export const devices = {
  lights: 'lights',
}

export const lightTopics = {
  mode: 'mode',
  minDim: 'minDim',
  maxDim: 'maxDim',
  animTime: 'animTime',
}

export const lightsNames = ['music', 'desk', 'living'].map((el) => `sl-${el}`)

// String lights topics
export const lightsTopics = [
  'lights/+/mode',
  'lights/+/minDim',
  'lights/+/maxDim',
  'lights/+/animTime',
]

// String lights names
