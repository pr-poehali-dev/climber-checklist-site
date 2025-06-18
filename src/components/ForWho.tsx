import Icon from "@/components/ui/icon";

const ForWho = () => {
  const profiles = [
    {
      icon: "User",
      title: "Новичок",
      description:
        "Только начинаешь путь в скалолазании и хочешь избежать типичных ошибок",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "TrendingUp",
      title: "Любитель",
      description:
        "Лазишь регулярно, но хочешь систематизировать подход к тренировкам",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "Target",
      title: "Опытный",
      description:
        "Готовишься к сложным маршрутам и хочешь довести подготовку до совершенства",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "Award",
      title: "Инструктор",
      description:
        "Тренируешь других и нужен структурированный материал для обучения",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-montserrat">
            Для кого этот чек-лист?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Независимо от уровня подготовки, структурированный подход поможет
            достичь новых высот
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${profile.color} flex items-center justify-center mb-6`}
              >
                <Icon
                  name={profile.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4 font-montserrat">
                {profile.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600">
            <Icon
              name="Users"
              size={20}
              className="inline mr-2 text-teal-500"
            />
            Присоединяйся к сообществу скалолазов, которые используют системный
            подход
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
