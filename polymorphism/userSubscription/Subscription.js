//На Хекслете доступ к курсам оформляется через подписку. Подписка - это отдельная сущность, которая хранит
// в себе информацию о самой подписке: когда она началась, сколько продолжается, оплачена ли и так далее.
// Типичная проверка на наличие подписки (а значит доступ к платному контенту) выглядит так:
//
// // Эти примеры сильно упрощены, к тому же Хекслет написан на Rails
// // но для демонстрации идеи такая реализация подойдет
// user.getCurrentSubscription().hasPremiumAccess();
// user.getCurrentSubscription().hasProfessionalAccess();
// Но не у всех пользователей есть подписка, на Хекслете есть и большая бесплатная часть.
// Так как подписка может отсутствовать, в коде придется делать так:
//
// if (user.getCurrentSubscription() && user.getCurrentSubscription().hasPremiumAccess()) {
//    // есть премиум доступ, показываем что-то особенное
// }
// Чтобы избежать постоянных проверок на существование подписки, мы внедрили Null Object.
// Теперь подписка есть всегда и достаточно написать:
//
// if (user.getCurrentSubscription().hasProfessionalAccess()) {
//    // есть профессиональный доступ, показываем что-то особенное


class Subscription {
    constructor(subscriptionPlanName) {
        this.subscriptionPlanName = subscriptionPlanName;
    }

    hasProfessionalAccess() {
        return this.subscriptionPlanName === 'professional';
    }

    hasPremiumAccess() {
        return this.subscriptionPlanName === 'premium';
    }
}

export default Subscription;