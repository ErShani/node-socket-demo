var socket = io();
socket.on('connect', function () {
    console.log('Connected to server')
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (data) {
    console.log('New Message', data)
    var li = $('<li></li>')
    li.text(`${data.from}:${data.text}`)
    $('#msgs').append(li)
})

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault()
    socket.emit('createMessage', {
        from: 'Divyesh',
        text: $('[name=message]').val()
    }, function (data) {
        console.log('Got it..!!!', data)
    })
})