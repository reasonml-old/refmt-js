const refmt = require('./')

const reasonTestCases = [
  [`let x = 10;`, `let x = 10;\n`],
  [`let x y => \nx +    y;`, `let x y => x + y;\n`]
]

reasonTestCases.forEach(([target, expected], index) => {
  test(`Reason test case #${index + 1}`, () => {
    expect(refmt(target)).toBe(expected)
  })
})

const ocamlTestCases = [
  [`let x =   10;;`, `let x = 10;\n`],
  [`let x = [1;2;3];;`, `let x = [1, 2, 3];\n`]
]

ocamlTestCases.forEach(([target, expected], index) => {
  test(`OCaml test case #${index + 1}`, () => {
    expect(refmt(target, 'ML')).toBe(expected)
  })
})
