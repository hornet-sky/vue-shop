import data from './data'
import Mock from 'mockjs'

Mock.mock(/\/news_list(?:\?.*)*/, {result: 'ok', data: data.news_list})
