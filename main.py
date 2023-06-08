from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PATH = "/usr/bin/chromedriver"

driver = webdriver.Chrome(PATH)
driver.get('https://www.spotify.com')

search_box = driver.find_element(By.ID, 'search-box')
search_box.send_keys('Artist Name')
search_box.submit()

song_titles = WebDriverWait(driver, 10).until(
    EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'a.song-title'))
)

for title in song_titles:
    print(title.text)

driver.quit()
