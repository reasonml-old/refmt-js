const Refmt = require('./refmt')

function refmt(
  src,
  sourceLang = 'RE',
  sourceType = 'implementation',
  targetLang = 'RE'
) {
  const [, result] = Refmt.refmt(src, sourceLang, sourceType, targetLang)

  return result
}

module.exports = refmt
module.exports.default = refmt
