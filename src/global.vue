<script>
import crypto from 'crypto'

const url = 'http://vue.tyqprivateweb.cn:35002/vue'
const userID = ''

function getRadom () {
  var radom = parseInt(Math.random() * 10000000000000)
  return radom
}
function gettime () {
  var times = parseInt(new Date().valueOf() / 1000)
  return times
}

function createsignure (jsons) {
  var newArr = []
  for (var item in jsons) {
    var tempObj = {key: item, value: jsons[item]}
    newArr.push(tempObj)
  }
  console.log(newArr)
  var kk = []

  newArr.sort(function (now, next) {
    return now.key > next.key
  })

  var data = ''
  console.log(kk)
  newArr.map(function (item, index) {
    if (index !== 0) {
      data += '&'
    }
    data += item.key + '=' + item.value
  })

  console.log(data)
  var md5 = crypto
    .createHash('md5')
    .update(data)
    .digest('hex')
  console.log(md5)
  md5 = md5.substring(0, 20)
  console.log(md5)
  return md5
}

export default {
  url,
  getRadom,
  gettime,
  createsignure,
  userID
}
</script>
