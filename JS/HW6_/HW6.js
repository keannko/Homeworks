"use strict";

// Поясніть своїми словами, як ви розумієте поняття асинхронності у Javascript
// Асинхронность это возможность работать в многопотоковом режиме

const button = document.querySelector('.button')


const getIP = async () => {
  const ip = await fetch('https://api.ipify.org/?format=json')
  const result = await ip.json()
  return result.ip
}

const getInfoByIpAdress = async () => {
  const resultIp = await getIP()
  const getData = await (await fetch(`http://ip-api.com/json/${resultIp}`)).json()
  return getData
}

const createHtml =(data) => {
  const infoList = document.querySelector('.info-list')
  if (document.body.contains(infoList)){
    alert('Данные уже отображены')
  }else{
  const div = document.createElement('div')
  div.classList.add('info-list')
  document.body.append(div)
  for(const key in data) {
    const p = document.createElement('p')
    p.innerText = `${key}: ${data[key]}`
    div.appendChild(p)
  }}
}

button.addEventListener('click', e => {
  const ipData = async () => {
    const ipDataInfo = await getInfoByIpAdress()
    createHtml(ipDataInfo)
  }
  ipData()
})