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

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

// Абонементы с детальной информацией
const subscriptionCategories = [
  {
    id: 'classic',
    title: 'КЛАССИЧЕСКИЙ',
    subtitle: 'Распространяется на все направления студии',
    popular: true,
    badge: 'Популярно',
    subscriptions: [
      { lessons: '1 занятие', price: '700' },
      { lessons: '4 занятия', price: '2 500' },
      { lessons: '6 занятий', price: '3 300' },
      { lessons: '8 занятий', price: '3 800' },
      { lessons: '12 занятий', price: '4 600' },
      { lessons: '16 занятий', price: '5 400' },
      { lessons: 'Безлимит', price: '5 900' }
    ]
  },
  {
    id: 'fitness',
    title: 'ТОЛЬКО ФИТНЕС',
    subtitle: 'Распространяется на все занятия без пилона: растяжку, силу и гибкость, choreo, strip',
    popular: false,
    badge: null,
    subscriptions: [
      { lessons: '1 занятие', price: '600' },
      { lessons: '4 занятия', price: '2 200' },
      { lessons: '6 занятий', price: '2 600' },
      { lessons: '8 занятий', price: '3 000' },
      { lessons: '12 занятий', price: '3 700' }
    ]
  },
  {
    id: 'combo',
    title: 'КОМБО-АБОНЕМЕНТ',
    subtitle: 'Лимитированное количество занятий с пилоном и без',
    popular: false,
    badge: 'Выгодно',
    subscriptions: [
      { lessons: '2 любых занятия на пилоне и 2 — без', price: '2 300' },
      { lessons: '4 любых занятия на пилоне и 4 — без', price: '3 500' },
      { lessons: '8 любых занятий на пилоне и 4 — без', price: '4 300' }
    ]
  }
]

// Условия
const terms = [
  'Срок действия абонемента — 1 месяц',
  'Отмена или перенос вечернего занятия возможны не позднее, чем за 4 часа до начала',
  'Отмена или перенос утреннего или дневного занятия — до 21:00 предшествующего дня',
  'Абонемент действует с момента первого посещения'
]

export default function PricesPage() {
  const router = useRouter()

  return (
    <BeamsBackground intensity="medium">
      <div className="min-h-screen">
        
        {/* Header */}
        <div className="sticky top-0 z-20 bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="gap-2"
              >
                <ChevronLeftIcon />
                <span>Назад</span>
              </Button>
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-white">
                  Цены и абонементы
                </h1>
                <p className="text-sm text-purple-200/70 mt-1">
                  Выберите подходящий вариант
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          
          {/* Абонементы по категориям */}
          <div className="space-y-8 mb-12">
            {subscriptionCategories.map((category) => (
              <div
                key={category.id}
                className="bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-4 sm:p-6 md:p-8 hover:border-purple-400/40 transition-colors relative"
              >
                {/* Badge */}
                {category.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold border border-purple-400/50 shadow-lg">
                      <SparklesIcon />
                      {category.badge}
                    </span>
                  </div>
                )}

                {/* Заголовок категории */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {category.title}
                  </h2>
                  <p className="text-purple-200/80 text-sm sm:text-base max-w-2xl mx-auto">
                    {category.subtitle}
                  </p>
                </div>

                {/* Таблица цен */}
                <div className="space-y-3 mb-6">
                  {category.subscriptions.map((sub, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-purple-800/30 border border-purple-500/10 hover:border-purple-400/30 transition-colors"
                    >
                      <span className="text-purple-100 text-sm sm:text-base font-medium">
                        {sub.lessons}
                      </span>
                      <span className="text-white text-lg sm:text-xl font-bold">
                        {sub.price} ₽
                      </span>
                    </div>
                  ))}
                </div>

                {/* Дополнительная информация */}
                <div className="text-center text-xs sm:text-sm text-purple-200/60 mb-4">
                  Срок действия абонемента — 1 месяц
                </div>

                {/* Action */}
                <Button
                  variant={category.popular ? "default" : "secondary"}
                  className="w-full"
                  onClick={() => router.push('/schedule')}
                >
                  Купить абонемент
                </Button>
              </div>
            ))}
          </div>

          {/* Условия */}
          <div className="bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 sm:p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <InfoIcon />
              Условия использования абонементов
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {terms.map((term, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 text-sm font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-purple-200/80 text-sm leading-relaxed">
                    {term}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="text-center">
            <div className="inline-block bg-purple-900/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 px-8 py-6">
              <p className="text-purple-200 mb-2">
                Остались вопросы? Свяжитесь с нами
              </p>
              <a 
                href="tel:+7XXXXXXXXXX"
                className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
              >
                📞 +7 (XXX) XXX-XX-XX
              </a>
              <p className="text-sm text-purple-200/70 mt-3">
                Звоните с 10:00 до 22:00 ежедневно
              </p>
            </div>
          </div>

        </div>
      </div>
    </BeamsBackground>
  )
}

