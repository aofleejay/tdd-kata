import roman from './roman'

test.each`
  input   | expected
  ${1}    | ${'I'}
  ${2}    | ${'II'}
  ${3}    | ${'III'}
  ${4}    | ${'IV'}
  ${5}    | ${'V'}
  ${6}    | ${'VI'}
  ${7}    | ${'VII'}
  ${9}    | ${'IX'}
  ${10}   | ${'X'}
  ${11}   | ${'XI'}
  ${15}   | ${'XV'}
  ${16}   | ${'XVI'}
  ${20}   | ${'XX'}
  ${40}   | ${'XL'}
  ${50}   | ${'L'}
  ${90}   | ${'XC'}
  ${100}  | ${'C'}
  ${400}  | ${'CD'}
  ${500}  | ${'D'}
  ${900}  | ${'CM'}
  ${1000} | ${'M'}
`(
  'should returns $expected when given an input $input',
  ({ input, expected }) => {
    expect(roman(input)).toBe(expected)
  },
)
