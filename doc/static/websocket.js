const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'emqx_test',
  username: 'silence',
  password: 'silence0802',
}
var client = mqtt.connect('ws://124.223.169.5:8083', options)
client.on('connect', function () {
  console.log('Connected')
  client.subscribe('test1')
})

client.on('message', function (topic, message) {
    // message is Buffer
    var obj = JSON.parse(message);
    console.log(obj)
    tempdata=Number(obj.temp)
    humpdata=Number(obj.hump)
    dirthumpdata=Number(obj.dirthump)
  })