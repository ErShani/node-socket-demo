var expect = require('expect')

var {generateMessage} = require('./message')

describe('generate message', () => {
    it('Should generate correct message object',()=>{

        var from = "Divyesh";
        var text = "Message from me";
        var message = generateMessage(from,text);
        
    })
})