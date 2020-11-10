//Реализуйте и экспортируйте по умолчанию класс FakeSubscription, который повторяет интерфейс
// класса Subscription за исключением конструктора.
// В конструктор FakeSubscription принимает пользователя.
// Если пользователь администратор user.isAdmin(), то все доступы разрешены, если нет – то запрещены.

class FakeSubscription {
    constructor(user) {
        this.user = user;
    }

    hasProfessionalAccess() {
        return this.user.isAdmin();
    }

    hasPremiumAccess() {
        return this.user.isAdmin();
    }
}

export default FakeSubscription;