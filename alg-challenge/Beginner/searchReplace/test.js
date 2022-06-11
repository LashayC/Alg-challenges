const paragraph = require('./index-START.js')

test('search and replce space with no spaces', () => {
  let paragraph = 'Lorem ipsum dolor sit ame onsectetur adipisicing elit. Vitae suscipit optio ab soluta illo numquam at, eos qui similique oluptates sapiente quis quisquam libero, dicta neque consequuntur. Asperiores, temporibus';
  
  expect(paragraph).toEqual('Loremipsumdolorsitameonsecteturadipisicingelit.Vitaesuscipitoptioabsolutaillonumquamat,eosquisimiliqueoluptatessapientequisquisquamlibero,dictanequeconsequuntur.Asperiores,temporibus')
})