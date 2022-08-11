from attr import s
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.urls import reverse, reverse_lazy


from ast import Str
from doctest import FAIL_FAST
from ftplib import all_errors
from lib2to3.pgen2 import driver
from locale import currency
from math import fabs
from operator import le
from os import times_result
from string import printable, punctuation
from tokenize import String
from turtle import title
from typing import Any
from pyparsing import originalTextFor
import undetected_chromedriver as uc
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException
import time
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import ElementClickInterceptedException
from PIL import Image
from fake_useragent import UserAgent
import random
import calendar
import re
from datetime import date
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from datetime import datetime
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium_stealth import stealth
from django.shortcuts import render
from concurrent import futures
import itertools


def index(request):
    return render(request, "index.html")


def move_to_results(request):
    return HttpResponse(reverse('polls:resluts'))


def redirect_results(request):
    return render(request, "results.html")




deperteAirportList = ['Aalborg', 'Aarhus', 'Aberdeen', 'Agadir', 'Alghero', 'Alicante', 'Almeria', 'Amman', 'Amsterdam', 'Ancona', 'Aqaba', 'Asturias', 'Athens',
 'Banja', 'Barcelona', 'Barcelona', 'Barcelona', 'Bari', 'Basel', 'Belfast', 'Bergerac', 'Berlin', 'Beziers', 'Biarritz', 'Billund', 'Birmingham',
 'Bodrum', 'Bologna', 'Bordeaux', 'Bournemouth', 'Bratislava', 'Bremen', 'Brindisi', 'Bristol', 'Brive', 'Brno', 'Brussels', 'Brussels', 'Bucharest',
 'Budapest', 'Burgas', 'Bydgoszcz', 'Cagliari', 'Carcassonne', 'Cardiff', 'Castellon', 'Catania', 'Chania', 'Clermont', 'Cluj', 'Cologne', 'Comiso',
    'Copenhagen', 'Corfu', 'Cork', 'Crotone', 'Cuneo', 'Dalaman', 'Derry', 'Dole', 'Dortmund', 'Dresden', 'Dublin', 'Dubrovnik', 'Dusseldorf', 'East',
 'Edinburgh', 'Eindhoven', 'Essaouira', 'Exeter', 'Faro', 'Fez', 'Figari', 'Frankfurt', 'Fuerteventura', 'Gdansk', 'Genoa', 'Glasgow', 'Glasgow',
 'Göteborg', 'Gran', 'Grenoble', 'Hamburg', 'Haugesund', 'Helsinki', 'Heraklion', 'Ibiza', 'Jerez', 'Kalamata', 'Karlsruhe', 'Katowice', 'Kaunas',
 'Kefalonia', 'Kerry', 'Klagenfurt', 'Knock', 'Kos', 'Kosice', 'Krakow', 'La', 'La', 'Lamezia', 'Lanzarote', 'Lapland', 'Lappeenranta', 'Larnaca',
 'Leeds', 'Leipzig', 'Lille', 'Limoges', 'Lisbon', 'Liverpool', 'Lodz', 'London Stansted', 'London Luton', 'London Gatwick', 'Lourdes', 'Lublin', 'Lulea', 'Luxembourg',
 'Maastricht', 'Madeira', 'Madrid', 'Malaga', 'Malmo', 'Malta', 'Manchester', 'Marrakesh', 'Marseille', 'Memmingen', 'Menorca', 'Milan', 'Milan',
 'Münster', 'Murcia', 'Mykonos', 'Nador', 'Nantes', 'Naples', 'Newcastle', 'Newquay', 'Nice', 'Nimes', 'Nis', 'Nuremberg', 'Olsztyn', 'Oradea',
 'Orebro', 'Oslo', 'Oslo', 'Ostrava', 'Ouarzazate', 'Oujda', 'Palanga', 'Palermo', 'Palma', 'Paphos', 'Pardubice', 'Paris', 'Paris', 'Parma',
 'Perpignan', 'Perugia', 'Pescara', 'Pisa', 'Plovdiv', 'Podgorica', 'Poitiers', 'Ponta', 'Porto', 'Poznan', 'Prague', 'Preveza', 'Pula', 'Rabat',
 'Rhodes', 'Riga', 'Rijeka', 'Rimini', 'Rodez', 'Rome', 'Rome', 'Rzeszow', 'Salzburg', 'Santander', 'Santiago', 'Santorini', 'Seville', 'Shannon',
'Sibiu', 'Skelleftea', 'Skiathos', 'Sofia', 'Split', 'Stockholm', 'Stockholm', 'Strasbourg', 'Suceava', 'Szczecin', 'Tallinn', 'Tampere', 'Tangier',
 'Teesside', 'Tel', 'Tenerife', 'Tenerife', 'Terceira', 'Tétouan', 'Thessaloniki', 'Timisoara', 'Toulouse', 'Tours', 'Trapani', 'Trieste', 'Turin',
 'Tuzla', 'Valencia', 'Valladolid', 'Varna', 'Växjö', 'Venice', 'Venice', 'Verona', 'Vienna', 'Vigo', 'Vilnius', 'Visby', 'Vitoria', 'Warsaw', 'Wroclaw',
 'Zadar', 'Zagreb', 'Zakynthos', 'Zaragoza']


def ajax_value(request):
  # 空港が検索された時
    value = request.POST.get("text")
    print(value)
    rap = list(filter(lambda x: str.lower(value)  in str.lower(x),deperteAirportList))
    # print(rap)
    results = rap
    return JsonResponse(results, safe=False)


# ===================== ===================== ===================== ===================== ===================== ===================== =====================
def split_list(a_list):
    half = len(a_list)//2
    return a_list[:half], a_list[half:]


def easyJetClearCokie(driver: uc.Chrome):
    driver.get('https://www.easyjet.com/en')

    wait = WebDriverWait(driver, 10)
    try:
        wait.until(EC.presence_of_element_located(
            (By.XPATH, '//*[@id="ensNotifyBanner"]')))
        driver.find_element(By.XPATH, '//*[@id="ensCloseBanner"]').click()
    except TimeoutException as e:
        print('タイムアウト')
    except Exception as e:
        print('それ以外000')

    one = driver.find_element(By.XPATH, '//*[@id="one-way"]')
    driver.execute_script("arguments[0].click();", one)
    driver.find_element(By.CLASS_NAME, 'origin').click()
    driver.find_element(By.CLASS_NAME, 'origin').clear()


def easyJetsetorigin(driver: uc.Chrome, origin: String):
    driver.find_element(By.CLASS_NAME, 'origin').clear()
    driver.find_element(By.CLASS_NAME, 'origin').send_keys(origin)
    s = driver.find_element(
        By.CSS_SELECTOR, 'ul[role="listbox"]').get_attribute("innerHTML")
    if len(s.split('>')) != 11:  # タブの中身が1つの場合
        time.sleep(1)  # タブが出てくるまで待機する

    uls = driver.find_element(By.XPATH,
                              '//*[@id="selected-autocomplete-item"]').get_attribute("innerHTML").split('"')  # 出発地の空港のタブをタップ巣ところ
    driver.find_element(By.ID, '%s' % (uls[1])).click()


easyListofSelect = []


def easyjetSearch2(origin: String, area: list, driver: uc.Chrome):
    print('EASY2===', easyDrivers.index(driver))
    selection = []
    cs = []

    driver.find_element(By.CLASS_NAME, 'destination').click()
    for item in area:
        driver.find_element(By.CLASS_NAME, 'destination').clear()
        driver.find_element(By.CLASS_NAME, 'destination').send_keys(item)

        selections = driver.find_elements(By.CLASS_NAME, 'ui-menu-item')
        ss = []

        for i in selections:
            seleht = i.get_attribute('innerHTML')
            ss.append(seleht)
        # print(ss)
        if len(ss) != 0:  # 選択肢が出てこない国は排除
            for value in ss:
                newValue = driver.find_elements(
                    By.CLASS_NAME, 'ui-menu-item')[ss.index(value)].get_attribute('innerHTML')
                # newValueの最初のやつとカントリーん異相違があるやつは除外
                if origin not in newValue and item in newValue.split('country')[-1]:
                    if newValue.split(' ')[1] != 'class="unavailable' and 'Train station' not in newValue:
                        # 行き先のタブが出てくるまでの待つ時間
                        # 選択肢はあるけどタブとして出ないものを排除したい
                        v = newValue.split('<')[2]
                        # print(newValue)
                        selection.append(v.split('>')[-1])
                        # print(v.split('>')[-1])
                        cs.append(item)

    # print(selection)
    easyListofSelect.append(selection)
    # print(cs)
    # print(len(selection))
    # print(len(cs))
    driver.close()
    easyDrivers.remove(driver)
    print('終了=================')


easyShowCity = []
easyShowPrice = []
easyShowDate = []


def has_numbers(inputString):
    return any(char.isdigit() for char in inputString)


def easyjetGetData(origin: String, cs: list, year: int, month: String, numMonth: int, driver: uc.Chrome):
    print('せっと',)
    easyJetsetorigin(driver, origin)

    for i in cs:
        if i != '':
              print(i,'================')
              try:
                f = driver.find_element(By.ID,'drawer-title-routesearch-alternate-routes').get_attribute('innerHTML')
                print('&1')
                driver.find_element(By.CLASS_NAME,'ej-link-button').click()
              except:

                try:
                    # f2 = driver.find_element(By.ID,'drawer-title-routesearch-alternate-routes').get_attribute('innerHTML')
                    wait9 = WebDriverWait(driver, 5)
                    wait9.until( EC.element_to_be_clickable((By.CLASS_NAME,'ej-link-button'))) 
                    b = driver.find_element(By.CLASS_NAME,'ej-link-button')
                    driver.execute_script("arguments[0].click();", b)
                except:
                   print('問題なし1')
                   pass
                
                print('問題なし2')
                pass

              des = driver.find_element(By.CLASS_NAME,'destination')
              driver.execute_script("arguments[0].click();", des)
              driver.find_element(By.CLASS_NAME,'destination').clear()
              driver.find_element(By.CLASS_NAME,'destination').send_keys(i)
              
              vv = ''
              try:
                  s = driver.find_element(By.XPATH,'//strong[contains( text(), "%s")]' % (i))
                  v = s.find_element(By.XPATH,'../..')
                  v1 = v.find_element(By.XPATH,'../..').get_attribute('innerHTML').split(' ')[5].split('"')[1]
                  vv = v1
              except:#選択肢が出てこない場合
                  print('選択タブが出ないもの')
                  continue
              
              if vv != '':
                print('選択タブタップ',vv)
                tab = driver.find_element(By.ID,'%s' % (v1))
                driver.execute_script("arguments[0].click();", tab)
                vv = ''
             
              p = driver.find_element(By.XPATH,'//span[contains( text(), "Click to choose a departure date")]')
              x = p.find_element(By.XPATH,'../..').get_attribute('innerHTML').split(' ')
              bid = x[17].split('"')[1]
              
              
              if bid != '':
                  try:
                    time.sleep(1)
                    # wait6 = WebDriverWait(driver, 5)
                    # wait6.until( EC.element_to_be_clickable((By.ID,'%s' % (bid)))) 
                    driver.find_element(By.ID,'%s' % (bid)).click() #日付のボタンをタップ]
                  except:
                    #すでに出ているので押せない
                    wait2 = WebDriverWait(driver, 5)
                    wait2.until( EC.element_to_be_clickable((By.ID,'close-drawer-link'))) 
                    driver.find_element(By.ID,'close-drawer-link').click()
                    continue

# =================================
              
              wait0 = WebDriverWait(driver, 10)
              wait0.until( EC.presence_of_element_located((By.CLASS_NAME,'drawer-tabs'))) #カレンダーのタブが出てくるまで待つ　出てきたら日付選択可能
              
              # time.sleep(1)#値段が出てきていない可能性がある
              s = driver.find_elements(By.XPATH,"//*[contains(text(), '%s %s')]" % (month,year))
              if len(s) < 2: #選択肢が出ない時
                  # print('フライトがその月にはない時')
                  wait4 = WebDriverWait(driver, 5)
                  wait4.until( EC.element_to_be_clickable((By.ID,'close-drawer-link'))) 
                  driver.find_element(By.ID,'close-drawer-link').click()
                  continue
              else:

                # print('フライトのでーた取得可能',i)
                easyShowCity.append(i)
                ds = []
                pss = []
                try:
                    for w in s:
                      if '<a' not in w.get_attribute('innerHTML'):
                        print(w.get_attribute('innerHTML'))
                        d = w.find_element(By.XPATH,'..').get_attribute('innerHTML').split('>') 
                        e = list( filter(lambda c:has_numbers(c),d) )
                        ne = ''.join(e).split('data-date')

                        for l in ne:
                          if 'spanfares' in l:
                            print(l.split('</span')[2])
                            ds.append(l.split('</span')[1])
                            pss.append(l.split('</span')[2])

                        break
                except:
                    pass
              
              easyShowPrice.append(pss)
              easyShowDate.append(ds)

# =================================
              try:
                x = driver.find_element(By.CLASS_NAME,'ej-link-button')
                driver.execute_script("arguments[0].click();", x)
              except:
                pass

    driver.close()
    print(easyShowCity)
    print(easyShowPrice)
    print(easyShowDate)
    print('FIN')
    easyGrDriver.remove(driver)


easyDrivers = []  # エリアの選択肢を取得するためのドライバー
easyGrDriver = []  # 選択肢から値段を取得するためのドライバー


def genelateEasyDriver(num: int):
    o = 'option' + str(num)
    o = webdriver.ChromeOptions()
    o.headless = True

    d = 'driver' + str(num)
    d = uc.Chrome(options=o)
    easyDrivers.append(d)
    easyJetClearCokie(d)


def genelateEasyGrDriver(num: int):
    o = 'grOoption' + str(num)
    o = webdriver.ChromeOptions()
    o.headless = True

    d = 'grDriver' + str(num)
    d = uc.Chrome(options=o)
    easyGrDriver.append(d)

    print('ひらく')

    easyJetClearCokie(d)


countryListlist = []


def multiThread(area: list):
    one = split_list(area)
    # two = split_list(one[0])
    # three = split_list(one[1])

    countryListlist.append(one[0])
    countryListlist.append(one[1])


westernEU = ['Germany', 'France', 'Netherlands', 'Belgium',
             'Austria', 'Switzerland', 'Luxembourg', 'Liechtenstein']
easternEU = ['Russia', 'Ukraine', 'Poland', 'Romania', 'Czechia',
             'Hungary', 'Belarus', 'Bulgaria', 'Slovakia', 'Moldova']
nothernEU = ['United Kingdom', 'Sweden', 'Denmark', 'Finland',
             'Norway', 'Lithuania', 'Latvia', 'Estonia', 'Iceland']
southernEU = ['Italy', 'Spain', 'Greece', 'Portugal', 'Serbia', 'Croatia',
              'Bosnia and Herzegovina', 'Albania', 'North Macedonia', 'Slovenia', 'Montenegro']


# ===================== ===================== ===================== ===================== ===================== ===================== =====================


def ajax_getOpen(request):
    print('OPEN first window0=======================')

    print('EASYDRIVERS', easyDrivers)
    if easyDrivers == []:
        with futures.ThreadPoolExecutor(max_workers=2) as executor:
            for i in range(2):
                thread = executor.submit(genelateEasyDriver, i)

    return HttpResponse('OPEN')


def ajax_Getorigin(request):
    value = request.POST.get("origin")
    print('DEPERT 受け取り')
    print(value)

    if easyDrivers != []:
        with futures.ThreadPoolExecutor(max_workers=2) as executor:
            for i in easyDrivers:
                executor.submit(easyJetsetorigin, i, value)

    return HttpResponse('')


def ajax_TapSearchBtn(request):
    # 検索された時
    o = request.POST.get("origin")
    m = request.POST.get("month")
    a = request.POST.get("area")
    countryListlist.clear()
    multiThread(eval(a))
    print('りあうと======', a)
    print(easyDrivers)

    genelateEasyGrDriver(0)
    # genelateEasyGrDriver(1)
    # genelateEasyGrDriver(2)
    # genelateEasyGrDriver(3)

    t1 = time.time()
    with futures.ThreadPoolExecutor(max_workers=2) as executor:
        for i in countryListlist:
            thread = executor.submit(
                easyjetSearch2, o, i, easyDrivers[countryListlist.index(i)])

    all = list(itertools.chain.from_iterable(easyListofSelect))
    a = split_list(all)
    b = split_list(a[0])
    c = split_list(a[1])
    ##

    # b2 = split_list(b[0])
    print(b[0])
    # print(len(b[0]))
    # print(len(b[1]))
    # print(len(c[0]))
    # print(len(c[1]))
    # print(b[1])
    # print(c[0])
    # print(c[1])

    easyjetGetData(o, b[0], 2022, 'August', 8, easyGrDriver[0])

    t2 = time.time()
    elapsed_time = t2-t1
    print(f"経過時間：{elapsed_time}")

    easyListofSelect.clear()

    # for i in drivers:
    #     i.close()

    # print(o)
    # print(m)
    # print(a)

    return HttpResponse('')
