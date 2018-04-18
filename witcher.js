(function(global, $) {

  var Geralt = function(firstname, lastname, language, luckyNumFriend, luckyNumWeapon) {
    return new Geralt.init(firstname,lastname,language, luckyNumFriend, luckyNumWeapon);
  }

  var supportedHeroes = ['geralt', 'ciri'];

  var supportedLangs = ['human', 'elf', 'common'];

  var supportedWeapon = ['sword', 'magic'];

  var stories = ["Once upon a time, Nilfgaard will be under Kovir's reign", "There is nothing better than some Toussaint Wine!" , "Yeneffer? No, I never heard of her"];

  var greeting = {
    human: 'Hi',
    elf: 'Ceadmil',
    common: 'Himil'
  };

  var formalGreetins = {
    human: 'Regards',
    elf: 'Salud',
    common: 'Salards'
  };

  var fightMessage = {
    human: 'Prepare the sword',
    elf: 'Gláeddyv aep',
    common: 'Glaeddyv prepar'
  }




  Geralt.prototype = {
    fullname: function() {
      return this.firstname + ' ' + this.lastname + ' uses ' + supportedWeapon[this.luckyNumWeapon];
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1 ) {
        throw "Invalid lang";
      }
      if(this.myLuckyNumber > supportedHeroes.length) {
        throw "Invalid Friend"
      }
      if(this.luckyNumWeapon > supportedWeapon.length) {
        throw "Invalid Weapon"
      }
    },


    addHero: function(name) {
      if(name === "")
        return this;
      supportedHeroes.push(name);
      console.log(supportedHeroes);
      return this;
    },
    addWeapon: function(name) {
      if(name === "")
        return this;
      supportedWeapon.push(name);
      console.log(supportedWeapon);
      return this;
    },
    greeting: function() {
      return greeting[this.language] + ' ' + this.firstname + ' ' + this.lastname;
    },
    formalGreeting: function() {
      return formalGreetins[this.language] + ' ' + this.firstname + ' ' + this.lastname;
    },
    fightMessage: function() {
      return fightMessage[this.language] + ' , but be careful. I will be using: ' + supportedWeapon[this.luckyNumWeapon];
    },
    tellMeAStory: function() {
      return stories[Math.floor(Math.random() * (stories.length))];
    },

    greet: function(formal) {
      var msg;
      if(formal)
        msg = this.formalGreeting();
      else
        msg = this.greeting();

      if(console)
        console.log(msg);

      return this;

    },

    fight: function() {
      return this.formalGreeting() + '. ' + this.fightMessage();
    },

    log: function() {
      if(console) {
        console.log(fightMessage[this.language] + ' : ' + this.fullname());
      }
      return this;
    },


    showMyFriend: function() {
      return 'My friend is here, the names is: ' + supportedHeroes[this.myLuckyNumber];
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if(!$)
        throw "Jquery not loaded";

      if(!selector)
          throw "Missing selector";

      var msg;
      if(formal)
        msg = this.greeting();
      else
        msg = this.formalGreeting();

      $(selector).html(msg);
      console.log(this.log());
      return this;
    },

    HTMLFight: function(selector) {
      if(!$)
        throw "Jquery not loaded";

      if(!selector)
          throw "Missing selector";



      $(selector).html(this.fight());
      console.log(this.log());
      return this;
    },

    HTMLFriends: function(selector) {
      if(!$)
        throw "Jquery not loaded";

      if(!selector)
          throw "Missing selector";



      $(selector).html(this.showMyFriend());
      console.log(this.log());
      return this;
    },

    HTMLStory: function(selector) {
      if(!$)
        throw "Jquery not loaded";

      if(!selector)
          throw "Missing selector";



      $(selector).html(this.tellMeAStory());
      console.log(this.log());
      return this;
    },

    HTMLshowTheOptions: function(selector) {
      if(!$)
        throw "Jquery not loaded";

      if(!selector)
          throw "Missing selector";

      console.log("Builiding ul");

      var msg = "<ul> <span style=\"color: green;\"> Heroes </span>";

      for(var i = 0; i < supportedHeroes.length ; i++)
            msg += "<li>" + supportedHeroes[i] + "</li>";
      var msg = msg + "</ul>";
      var msg = msg + "<ul> <span style=\"color: green;\"> Weapons </span>";
      for(var i = 0; i < supportedWeapon.length ; i++)
            msg += "<li>" + supportedWeapon[i] + "</li>";
      var msg = msg + "</ul> <br>";
      $(selector).after(msg);
      return this;
    }



  };

  Geralt.init = function(firstname,lastname,language,myLuckyNumber,luckyNumWeapon){
    var self = this;
    self.firstname = firstname || 'Geralt';
    self.lastname = lastname || 'from Rivia';
    self.language = language || 'human';
    self.myLuckyNumber = myLuckyNumber;
    self.luckyNumWeapon = luckyNumWeapon;
    this.validate();
  }

  Geralt.init.prototype = Geralt.prototype;

  global.Geralt = global.G$ = Geralt;
}(window, jQuery)
);
