'use client'

import { useRouter } from 'next/navigation'
import { BeamsBackground } from '@/components/ui/beams-background'
import { Button } from '@/components/ui/button'

// Иконки
const ChevronLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// Направления с подробной информацией
const directions = [
  {
    id: 'pole-fit',
    name: 'Pole Fit',
    tagline: 'Трюковая дисциплина на пилоне',
    description: 'Несмотря на то, что большую часть урока мы проводим «в воздухе», новичкам не стоит бояться Pole Fit. Нагрузка всегда дается по силам. Помимо суставной разминки и работы на снаряде, занятие включает в себя упражнения на общую и специальную физическую подготовку.',
    features: [
      'Трюки и акробатика на пилоне',
      'Подходит для новичков',
      'Суставная разминка',
      'Общая физическая подготовка'
    ],
    levels: ['Начинающие', 'Продолжающие', 'Продвинутые']
  },
  {
    id: 'pole-exotic',
    name: 'Pole Exotic',
    tagline: 'Сексуальный, чувственный танец',
    description: 'Танец с пилоном на каблуках (стрипах). Направление, где ты сможешь выражать себя через музыку и свое тело. На такой тренировке мы учимся красиво двигаться на каблуках: с пилоном и без него, в партере.',
    features: [
      'Танец на каблуках (стрипах)',
      'Работа с музыкальностью',
      'Движения в партере',
      'Развитие чувственности'
    ],
    levels: ['Начинающие', 'Продолжающие']
  },
  {
    id: 'strength-flexibility',
    name: 'Сила & Гибкость',
    tagline: 'Ускорь свой прогресс',
    description: 'Направление для тех, кто хочет ускорить свой прогресс в Pole Fit, Pole Exotic и Pole Dance. Включает в себя упражнения на общую физическую подготовку и стретчинг. Регулярные посещения групп по данному направлению позволят вам стать сильнее и гибче.',
    features: [
      'Общая физическая подготовка',
      'Стретчинг',
      'Усиление прогресса в pole',
      'Развитие силы и гибкости'
    ],
    levels: ['Все уровни']
  },
  {
    id: 'stretching',
    name: 'Растяжка',
    tagline: 'Грациозные прогибы и желанные шпагаты',
    description: 'Мы сочетаем активный и пассивный стретчинг, статический и динамический. В нашем расписании есть классы как фитнес-растяжки, так и растяжки, направленной на достижение определенных целей (к примеру, шпагатов или мостиков).',
    features: [
      'Активный и пассивный стретчинг',
      'Статические и динамические упражнения',
      'Работа на шпагаты',
      'Работа на мостики'
    ],
    levels: ['Все уровни']
  },
  {
    id: 'high-heels',
    name: 'High Heels (Choreo)',
    tagline: 'Танцевальное направление',
    description: 'Особенностью этого стиля является обувь на шпильках. Он учит не только красиво двигаться, но и держать равновесие, развивает координацию движений, а также укрепляет мышцы ног.',
    features: [
      'Танец на каблуках',
      'Развитие координации',
      'Работа над равновесием',
      'Укрепление мышц ног'
    ],
    levels: ['Начинающие', 'Продолжающие']
  }
]

export default function DirectionsPage() {
  const router = useRouter()

  return (
    <BeamsBackground intensity="medium">
      <div className="min-h-screen">
        
        {/* Header - Адаптивный */}
        <div className="sticky top-0 z-20 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
          <div className="px-4 sm:px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="gap-2"
              >
                <ChevronLeftIcon />
                <span className="hidden sm:inline">Назад</span>
              </Button>
              <div className="flex-1">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Наши направления
                </h1>
                <p className="text-xs sm:text-sm text-purple-200/70 mt-1">
                  Найдите то, что подходит именно вам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 py-6">
          
          {/* Направления - Адаптивные карточки */}
          <div className="space-y-6 mb-12">
            {directions.map((direction) => (
              <div
                key={direction.id}
                className="bg-purple-900/40 backdrop-blur-xl rounded-xl border border-purple-500/20 p-6 sm:p-8 hover:border-purple-400/40 transition-colors"
              >
                {/* Header - Адаптивный */}
                <div className="mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {direction.name}
                  </h2>
                  <p className="text-purple-300 text-sm sm:text-base font-medium">
                    {direction.tagline}
                  </p>
                </div>

                {/* Description - Адаптивный размер */}
                <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed mb-6">
                  {direction.description}
                </p>

                {/* Features & Levels - Адаптивная сетка */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Features */}
                  <div>
                    <h3 className="text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      <SparklesIcon />
                      Особенности
                    </h3>
                    <ul className="space-y-2">
                      {direction.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-purple-200/80 text-sm">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Levels */}
                  <div>
                    <h3 className="text-sm font-semibold text-purple-300 mb-3">
                      Уровни подготовки
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {direction.levels.map((level, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-200 text-sm font-medium border border-purple-400/20"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions - Адаптивные кнопки в 2 колонки */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => router.push('/schedule')}
                  >
                    Записаться на занятие
                  </Button>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </BeamsBackground>
  )
}

