/**
 * User Model
 * @class User
 */
class User {
  constructor(id, first_name, last_name, locale, context, date) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.locale = locale;
    this.context = context;
    this.date = date;
  }
}

module.exports = User;