/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Кто из этих животных не вылупляется из яйца:",
        ["Крокодил", "Утконос", "Бегемот", "Черепаха"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Реши пример 7 + 2 =",
        ["5", "9", "8", "10"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ],
    [
        "Какой цвет получится, если смешать желтый и синий",
        ["Красный", "Синий", "Фиолетовый", "Зеленый"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],

    [
        "На ноге - колено, а на руке...",
        ["Плечо", "Кисть", "Локоть", "Пальцы"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Чего в слове больше: ",
        ["Букв", "Слогов"],
        [
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Каким по счету месяцем в году является март",
        ["Третьим", "Четвертым", "Вторым", "Пятым"],
        [
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ],
    [
        "У Кати было 7 рублей. Она купила тетрадь за 5 рублей. Сколько денег у нее осталось?",
        ["3 рубля", "1 рубль", "2 рубля", "Ничего не осталось"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Сколько букв в русском алфавите?",
        ["28", "33", "30", "36"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ],
    [
        "Где шьют одежду на заказ?",
        ["Магазин", "Ателье"],
        [
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "Назове осеннии месяцы",
        ["Август, сетнябрь, октябрь", "Март, апрель, май", "Сентябрь, октябрь, ноябрь"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "8 - это четное число или нечетное?",
        ["Четное", "Нечетное"],
        [
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Назови телефон полиции",
        ["101", "102", "103"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Назови по порядку три цвета российского флага",
        ["Белый, синий, красный", "Синий, белый, красный", "Красный, белый, синий"],
        [
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ],
    [
        "Что тяжелее: килограмм пуха или килограмм железа?",
        ["Килограмм пуха", "Килограмм железа", "Одинаково/Ничего"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "В слове компот звук 'кэ' является:",
        ["гласным", "согласным и мягким", "согласным и твердым"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "Какой из приведенных пример не равен 5?",
        ["6 - 1", "8 - 3", "10 - 2", "9 - 4"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Куда улетают зимовать перелетные птицы?",
        ["На запад", "На восток", "На юг", "На север"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Какой день недели предшествует среде?",
        ["Четверг", "Суббота", "Пятница", "Понедельник", "Вторник"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "Какой гриб в лукошке лишний?",
        ["Опенок", "Мухомор", "Подберезовик", "Сыроежка"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ],
    [
        "Белые медведи водятся:",
        ["на Северном полюсе", "на Южном полюсе"],
        [
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Каков лимон на вкус:",
        ["Горький", "Сладкий", "Кислый"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "Закончи русскую народную поговорку: Один в поле...",
        ["Казак", "Не воин", "Не друг", "Не враг"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"

        ]
    ],
    [
        "Что растет на елке, кроме иголок?",
        ["Игрушки", "Листья", "Шишки"],
        [
            "this.score.excellent",
            "this.score.excellent",
            "this.score.excellent++"
        ]
    ],
    [
        "Что делает днем сова?",
        ["Охотится", "Спит", "Строит гнездо"],
        [
            "this.score.excellent",
            "this.score.excellent++",
            "this.score.excellent"
        ]
    ],
    [
        "Закончи русскую народную пословицу: Терпенье и труд...",
        ["все перетрут", "и бычки молоко дадут", "до мозолей доведут"],
        [
            "this.score.excellent++",
            "this.score.excellent",
            "this.score.excellent"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'excellent': {
        name: "Прекрасный результат",
        description: "У тебя замечательный уровень, ты полностью подготовлен к 1 классу.",
        recommendations: ".",
        wishes: "Новых свершений и побед будущему первокласснику.",
        points: "5+"
    },
    'verygood': {
        name: "Отличный результат",
        description: "У тебя отличный уровень, ты готов к школе.",
        recommendations: "Но не стоит раслабляться.",
        wishes: "Будь готов к новым знаниям.",
        points: "5"
    },
    'good': {
        name: "Хороший результат",
        description: "У тебя хороший уровень для школы.",
        recommendations: "Стоит немного подтянуть знания, чтобы добиться отличного результата",
        wishes: "Аккуратность и внимательность - вот залог к успеху.",
        points: "4"
    },
    'satisfactory': {
        name: "Удовлетворительный результат",
        description: "У тебя приемлемый уровень для школы, но стоит обратить внимание на пробелы в знаниях",
        recommendations: "Усердие и терпение - вот залог хороших оценок.",
        wishes: "Старайся и будь внимательным, тогда у тебя все получится.",
        points: "3"
    },
    'fail': {
        name: "Плохой результат",
        description: "У тебя очень много пробелов в знаниях, при нынешним уровне стоит усиленно заниматься, чтобы наверстать учебный материал.",
        recommendations: ".",
        wishes: "Нужно приложить много усилий и труда - чтобы достичь положительного результата.",
        points: "2"
    }
}