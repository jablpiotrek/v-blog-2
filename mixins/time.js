import { format } from 'date-fns'

const time = {
  methods: {
    timestamp () {
      return Date.now()
    },
    formatTime (timestamp) {
      return format(timestamp, 'dd/MM/yyyy HH:mm')
    }
  }
}

export default time
