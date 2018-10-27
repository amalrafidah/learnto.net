import firebase from 'firebase';
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUp = function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signIn = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        firebase.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return firebase.auth().currentUser;
    };
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map