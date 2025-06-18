import Icon from "@/components/ui/icon";

const WhatsInside = () => {
  const features = [
    {
      icon: "Brain",
      title: "Концентрация",
      description: "Техники для максимальной фокусировки на маршруте",
      details: [
        "Медитативные практики перед восхождением",
        "Визуализация сложных участков",
        "Контроль внимания во время лазания",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: "Shield",
      title: "Управление страхами",
      description: "Преодоление психологических барьеров",
      details: [
        "Работа со страхом высоты и падения",
        "Постепенное увеличение сложности",
        "Техники успокоения в стрессовой ситуации",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: "Zap",
      title: "Мотивация и прогресс",
      description: "Система отслеживания достижений",
      details: [
        "Дневник тренировок и восхождений",
        "Постановка и достижение целей",
        "Анализ ошибок и успехов",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: "Wind",
      title: "Дыхательные техники",
      description: "Контроль дыхания для лучшей выносливости",
      details: [
        "Дыхание во время динамических движений",
        "Восстановление на зацепах отдыха",
        "Кислородное насыщение перед стартом",
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-montserrat">
            Что внутри чек-листа?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            4 ключевых навыка, которые трансформируют твой подход к скалолазанию
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 font-montserrat">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 mb-6 text-lg">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="text-green-500 mt-0.5 flex-shrink-0"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon
              name="Lightbulb"
              size={48}
              className="text-yellow-400 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              Бонус: Готовые шаблоны
            </h3>
            <p className="text-slate-200 text-lg">
              Получи готовые чек-листы для разных типов восхождений: боулдеринг,
              спортивное лазание, мультипитчи
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
