const Refmt = require('./refmt')

function refmt(
  src,
  sourceFormatting = 'RE',
  sourceType = 'implementation',
  targetFormatting = 'RE'
) {
  const [, result] = Refmt.refmt(
    src,
    sourceFormatting,
    sourceType,
    targetFormatting
  )

  return result
}

module.exports = refmt
module.exports.default = refmt
