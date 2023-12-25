/**
 * Contains the miscellaneous route handlers.
 * @author Delight Olu-Olaguji <https://github.com/Dheelyte>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
