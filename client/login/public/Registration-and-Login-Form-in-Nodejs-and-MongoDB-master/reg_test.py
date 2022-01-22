from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

PATH = "C:\Program Files (x86)\chromedriver.exe"
driver=webdriver.Chrome(PATH)

driver.get("file:///C:/Siddharth/devops-master/new/frontend/index.html")
driver.get("http://127.0.0.1:3000/")


# find username/email field and send the username itself to the input field
driver.find_element_by_name("email").send_keys("mike.ross@gmail.com")
driver.find_element_by_name("username").send_keys("absolutmadlad")

# find password input field and insert password
driver.find_element_by_name("password").send_keys("weakpassword")
driver.find_element_by_name("passwordConf").send_keys("weakpassword")

# click login button
driver.find_element_by_class_name("btn.btn-success").click()

# for closing the browser
driver.close()