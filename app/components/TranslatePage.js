'use client'

export default function TranslatePage(
    lang,
    languageRU,
    languageENG,
    designerName,
    shortDescriptionProfession,
    shortDescriptionAge,
    aboutTitle,
    skillsTitle,
    workInProgramms,
    portfolioTitle,
    footerTitle,
    footerSubtitle,
    messagersSubtitle,
    messageButton,
    navList__linkRef,
    aboutSubtitleRef
) {





    switch (lang) {
        case 'ru':
            languageRU.style.color = "black";
            languageENG.style.color = "#828282";


            navList__linkRef[0].innerHTML = 'Главная';
            navList__linkRef[1].innerHTML = 'Обо мне';
            navList__linkRef[2].innerHTML = 'Навыки';
            navList__linkRef[3].innerHTML = 'Портфолио';
            navList__linkRef[4].innerHTML = 'Контакты';

            designerName.innerHTML = 'Денис Новик';
            shortDescriptionProfession.innerHTML = 'UX | UI дизайнер';
            shortDescriptionAge.innerHTML = '24 года, Минск';

            aboutTitle.innerHTML = 'Обо мне';
            aboutSubtitleRef[0].innerHTML = 'Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.';
            aboutSubtitleRef[1].innerHTML = 'Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.';
            aboutSubtitleRef[2].innerHTML = 'Готов реализовать отличные проекты с замечательными людьми.';

            skillsTitle.innerHTML = 'Навыки';
            workInProgramms.innerHTML = 'работаю в таких программах как';

            portfolioTitle.innerHTML = 'Портфолио';

            footerTitle.innerHTML = 'Контакты';
            footerSubtitle.innerHTML = 'Хотите узнать больше или просто поболтать? Добро пожаловать!';
            messagersSubtitle.innerHTML = 'Можете похвалить меня на<br>LinkedIn, Instagram, Behance, Dribble';
            messageButton.innerHTML = 'Отправить сообщение';
            break;
        case 'eng':
            languageRU.style.color = "#828282";
            languageENG.style.color = "black";


            navList__linkRef[0].innerHTML = 'Home';
            navList__linkRef[1].innerHTML = 'About me';
            navList__linkRef[2].innerHTML = 'Skills';
            navList__linkRef[3].innerHTML = 'Portfolio';
            navList__linkRef[4].innerHTML = 'Contacts';

            designerName.innerHTML = 'Denis Novik';
            shortDescriptionProfession.innerHTML = 'UX | UI designer';
            shortDescriptionAge.innerHTML = '24 years old, Minsk';

            aboutTitle.innerHTML = 'About me';
            aboutSubtitleRef[0].innerHTML = "Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.";
            aboutSubtitleRef[1].innerHTML = `I'm studying at courses "Web and mobile design interfaces" in IT-Academy.`;
            aboutSubtitleRef[2].innerHTML = 'Ready to implement excellent projects with wonderful people.';

            skillsTitle.innerHTML = 'Skills';
            workInProgramms.innerHTML = 'I work in such programs as';

            portfolioTitle.innerHTML = 'Portfolio';

            footerTitle.innerHTML = 'Contacts';
            footerSubtitle.innerHTML = 'Want to know more or just chat? You are welcome!';
            messagersSubtitle.innerHTML = 'Like me on<br>LinkedIn, Instagram, Behance, Dribble';
            messageButton.innerHTML = 'Send message';
            break;
    }

}