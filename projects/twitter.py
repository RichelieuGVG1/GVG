import datetime
from collections import Counter
import re
import os

now = datetime.datetime.now()

#15:36, 26 July 2020
def get_time():
    months = {1:'January', 2:'Febuary', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December'}
    return f'{now.hour}:{now.minute}, {now.day} {months[now.month]} {now.year}'

def main():
    do=0
    try:
        while do>=4 or do<=0:
            do=int(input('Greetings! Select, what u want to do:\n1-create new post\n2-edit post by number\n3-delete post by number\n>>'))
    except:
        main()
    with open('twitter.html', 'r', encoding='UTF-8') as file:
        twitter=str(file.read())#файл разметки хтмл
        words = re.findall(r'\w+', twitter)
        counter = Counter(words)
        #print(counter['number'])#нумерация твитов
        file.close()
    with open ('template.txt', 'r') as temp:
        template_text=str(temp.read())
        temp.close()
        
    if do==1:
        new_text=str(input('Enter here new twitter text>>'))
        template_text=re.sub(r'twit_text',new_text, template_text)
        template_text=re.sub(r'nu1mber',str(counter['number']+1), template_text)
        template_text=re.sub(r'twit_date',get_time(), template_text)
        #print(template_text)

        twitter_array=twitter.split('<!-- br -->')
        #print(twitter_array[0])

        new_twitter=twitter_array[0]+'\n<!-- br -->\n'+template_text+'\n'+twitter_array[1]
        #print(new_twitter)

        with open('twitter.html', 'w', encoding='UTF-8') as file:
            file.write(new_twitter)
            file.close()

        print('successful added new post')

    if do==3:
        num_del=int(input('Enter number of post to delete>>')) 
        a=f"<li class='twit-post' number='{num_del}'>"
        deleted_text=twitter[twitter.find(a) : twitter.find(a) + twitter[twitter.find(a):].find('</li>')+5 ]

        b="<p class='twitter-text'>"
        print('Here were found:')
        print(deleted_text[deleted_text.find(b) : deleted_text.find(b) + deleted_text[deleted_text.find(b):].find('</p>')+4 ])
        delete=int(input('delete?\n1-yes\n2-no\n>>'))
        if delete==1:
            twitter = twitter.replace(deleted_text, '')
            with open('twitter.html', 'w', encoding='UTF-8') as file:
                file.write(twitter)
                file.close()
            print(f'successful deleted post {num_del}')
        else:
            main()
main()
os.system('pause')
