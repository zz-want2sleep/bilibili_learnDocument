import {request} from 'network/request'

export function getMultiData() {
  const config = {
    url: 'home/multidata'
  }
  return request(config)
}

export function getGoods() {
  const conifg = {
    url: ''
  }
}

export function getHomeGoods(type, page) {
  const config = {
    url: 'home/data',
    params: {
      type,
      page
    }
  }
  return request(config)
}