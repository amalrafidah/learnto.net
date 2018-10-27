var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from "rxjs/operators";
var DataProvider = /** @class */ (function () {
    function DataProvider(db, zone) {
        this.db = db;
        this.zone = zone;
    }
    DataProvider.prototype.getFiles = function () {
        var ref = this.db.list('articles');
        return ref.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    DataProvider.prototype.getPopular = function () {
        var ref = this.db.list('popular');
        return ref.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    DataProvider.prototype.getContent = function () {
        var ref = this.db.list('/articles/Content');
        return ref.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    DataProvider.prototype.getRecommended = function () {
        var ref = this.db.list('recommended');
        return ref.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    DataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [AngularFireDatabase, NgZone])
    ], DataProvider);
    return DataProvider;
}());
export { DataProvider };
//# sourceMappingURL=data.js.map