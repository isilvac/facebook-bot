// ===== MODELS ================================================================
const HMap = require('./hmap');
const User = require('../model/user');

const validContext = ["telco", "bike", "lawyer", "shop", "casino"];
const validLocale  = ["es", "en"];

/**
 * Maps User data
 */
class UserMap extends HMap {

  /**
   * User Constructor and insertion in the Map
   *
   * @param {id}         messengerId obtained via api.getUserDetails()
   * @param {first_name} user first name as declared to facebook
   * @param {last_name}  user surname as declared to facebook
   * @param {locale}     user language
   * @param {context}    bot context. default value is validContext[0]
   * @param {date}       timestamp of the first interaction with bot 
   * @returns {Object}   User model
   */
  insert(id, first_name, last_name, locale, context, date) {
    const user = new User(
      id,
      first_name,
      last_name,
      locale,
      context,
      date
    );
    this.set(id, user);
    return user;
  }

  /**
   * Get a user by their unique Messenger id
   *
   * @param {id}       messengerId obtained via api.getUserDetails()
   * @returns {Object} User model
   */
  get(id) {
    let currentUser = {};
    this.data.forEach((userData) => {
      if (userData.id === id) {
        currentUser = userData;
      }
    });
    return currentUser;
  }

  /**
   * Returns default context for the bot
   */
  defaultContext() {
    return validContext[0];
  }

  /**
   * Get the current context for the User
   *
   * @param {id}       messengerId obtained via api.getUserDetails()
   * @returns {String} current context value
   */
  getUserContext(id) {
    let currentUser = this.get(id);
    if (!currentUser) {
      return null;
    }
    return currentUser.context;
  }

  /**
   * Set a new context for the User if it's valid
   *
   * @param {id}         messengerId obtained via api.getUserDetails()
   * @param {newContext} new context for the user
   * @returns {Object}   new User object
   */
  setUserContext(id, newContext) {
    let currentUser = this.get(id);
    if (!currentUser) {
      return {};
    }
    if (validContext.indexOf(newContext.toLowerCase()) > -1) {
      currentUser.context = newContext;
      this.update(id, currentUser);
      return currentUser;
    } else {
      return {};
    }
  }

  /**
   * Get the current locale for the User
   *
   * @param {id}       messengerId obtained via api.getUserDetails()
   * @returns {String} current locale value
   */
  getUserLocale(id) {
    let currentUser = this.get(id);
    if (!currentUser) {
      return null;
    }
    return currentUser.locale;
  }

  /**
   * Set a new locale for the User if it's valid
   *
   * @param {id}        messengerId obtained via api.getUserDetails()
   * @param {newLocale} new locale for the user
   * @returns {Object}  new User object
   */
  setUserLocale(id, newLocale) {
    let currentUser = this.get(id);
    if (!currentUser) {
      return {};
    }
    if (validLocale.indexOf(newLocale.toLowerCase()) > -1) {
      currentUser.locale = newLocale;
      this.update(id, currentUser);
      return currentUser;
    } else {
      return {};
    }
  }

  /**
   * Returns default language for the bot
   */
  defaultLocale() {
    return validLocale[0];
  }

  /**
   * Insert an updated user only if it currently exists in the Map
   *
   * @param {String} username     Username of the user to update
   * @param {Object} updateObject Updated user properties
   * @returns {Object} User model
   */
  update(id, updateObject) {
    const currentUser = this.get(id);
    if (!currentUser){
      return {};
    }

    const updatedUser = Object.assign({}, currentUser, updateObject);
    this.set(id, updatedUser);
    return updatedUser;
  }
}

const USER_MAP = new UserMap();

module.exports = USER_MAP;