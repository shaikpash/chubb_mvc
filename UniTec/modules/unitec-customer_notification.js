/**
*	@author Maxime Castagnet
*	@creation 08/01/2018
*	this script contains the MVC pattern applied to the customer notification module of the UNItec application.
*	Each time it is requested, a Survey object will be created with a set of fields
*	on completion, the module will return a set customer notification.
*/

function CustomerNotification () {

  // model definition
  var model = function() {
    var that = this;

    // attributes
    var contacts = [];
    var selectedContact = null;
    var topics = [];
    var selectedTopic = null;
    var interventionDateTime = null;
    var selectedChannel = null;
    var channels = {
      mail : 0,
      sms : 1
    };

    // public methods

    // constructor
    var build = function() {
      contacts = [
        {name : "Thierry Jeannet", phone : "0616256746", mail : 'thierry.jeannet@sicli.com'},
        {name : "Maxime Castagnet", phone : "0661919041", mail : 'maxime.castagnet@chubb.fr'}          
      ]; // 

      selectedContact = 0;

      topics = [
        {key : "ADP", value : "Avis de passage"},
        {key : "RDV", value : "Confirmation de RDV"}
      ];

      // selectedTopic = 0;

      interventionDateTime = new Date();
    };

    // get
    var getContacts = function() {
      return contacts;
    };

    var getSelectedContact = function() {
      return selectedContact;
    };

    var getContactMail = function() {
      return contacts[selectedContact].mail;
    };

    var getContactPhone = function() {
      return contacts[selectedContact].phone;
    };

    var getTopics = function() {
      return topics;
    };

    var getSelectedTopic = function() {
      return topics[selectedTopic].value;
    };

    var getFormattedBody = function() {
      var dateOptions = {weekday: 'long', year : 'numeric', month : 'long', day : 'numeric'};
      var formattedDate = interventionDateTime.toLocaleDateString('fr-FR', dateOptions);
      var formattedBody = topics[selectedTopic].key = "ADP" ? "Avis de passage\n" : "Confirmation de RDV";
      
      formattedBody += "\n\nBonjour,\n";
      
      formattedBody += topics[selectedTopic].key = "ADP" ? 
        "Je vous informe de mon passage le \n" : 
      	"Suite à notre entretien, je vous confirme mon passage le ";
      
      formattedBody += formattedDate + ".\n\n";
      
      formattedBody += "Si cette date ne vous convient pas, n'hésitez pas à me contacter. \n\nCordialement";
      
      return formattedBody;
      // TBD
    };

    var getInterventionDateTime = function() {
      return interventionDateTime;
    };

    // set
    var setSelectedContact = function(userSelectedContact) {
      selectedContact = userSelectedContact;
    };

    var setSelectedTopic = function(userSelectedTopic) {
      selectedTopic = userSelectedTopic;
    };
    
    var setChannelAsMail = function() {
      selectedChannel = channels.mail;
    };
    
    var setChannelAsSMS = function() {
      selectedChannel = channels.sms;
    };

    // custom
    var addContact = function() {
      alert("ajout de contact non implémenté.");
      // TBD
    };

    var modifyContact = function() {
      alert("modification de contact non implémentée.");
      // TBD
    };

    var save = function() {
      alert("envoi de la notification client non implémenté.");
      // TBD
    };

    var reset = function() {
      formattedBody = null;
      InterventionDateTime = null;
      selectedTopics = null;
      Topics = [];
      SelectedContact = null;
      Contacts = [];
    };

    return {
      setSelectedContact : setSelectedContact,
      addContact : addContact,
      modifyContact : modifyContact,
      setSelectedTopic : setSelectedTopic,
      getSelectedContact : getSelectedContact,
      getContacts : getContacts,
      getContactMail : getContactMail,
      getContactPhone : getContactPhone,
      getTopics : getTopics,
      getSelectedTopic : getSelectedTopic,
      getFormattedBody : getFormattedBody,
      getInterventionDateTime : getInterventionDateTime,
      save : save,
      build : build,
      reset : reset
    };
  }();

  // view definition
  var view = function() {
    var that = this;

    // form view components
    var form = frmCustomerNotification; // écran notification client
    var formTitle = form.lblTitle;
    var contactList = form.cmbBxContacts; // liste déroulante devant contenir les contacts ;
    var contactEditBtn = form.vBxEditContact;
    var contactAddBtn = form.vBxAddContact;
    var contactMail = form.lblContactMail;
    var contactPhone = form.lblContactPhone;
    var topicList = form.cmbBxTopic;
    var interventionDateTime = form.lblInterventionDateTime;

    // popup view components
    var preview = PopNotificationPreview; // référence popup ;
    var previewTitle = preview.lblTitle;
    var previewContactMail = preview.lblMail;
    var previewContactPhone = preview.lblPhone;
    var previewTopic = preview.lblTopic;
    var previewBody = preview.lblBody;

    // events
    var onBack;
    var onMailCheck;
    var onSMSCheck;
    var onPreviewBack;
    var onPreviewCheck;

    // private methods
    var onPreShow = function() {
      navigationModel.push();
    };

    // output methods
    //// main form
    var display = function() {
      otis.application.setCurrentAppMenu("customerNotificationMenu");
      form.show();
    };

    var displaySelectedContact = function(mail, phone) {
      if(!validationModel.isNull(mail)) {
        contactMail.text = "email : " + mail;
      }
      else {
        contactMail.text = "pas d'email associé à ce contact.";
      }

      if(!validationModel.isNull(phone)) {
        contactPhone.text = "téléphone : " + phone;
      }
      else {
        contactPhone.text = "pas de téléphone associé à ce contact.";
      }    
    };

    var displayContacts = function(contacts, selectedContact) {
      contactList.masterData = contacts;
      if(!validationModel.isNull(selectedContact)) contactList.selectedKeys = [selectedContact.toString()];
    };

    var displayTopics = function(topics) {
      topicList.masterData = topics;
    };

    var displayInterventionDateTime = function(refInterventionDateTime) {
      var dateOptions = {weekday: 'long', year : 'numeric', month : 'long', day : 'numeric'};
      var formattedDate = refInterventionDateTime.toLocaleDateString('fr-FR', dateOptions);
      var formattedTime = refInterventionDateTime.toLocaleTimeString('fr-FR');
      interventionDateTime.text = "Date et heure de début d'intervention : " + formattedDate + " " + formattedTime;
    };

    var close = function() {
    };

    //// popup
    var displayPreview = function() {
      preview.show();
    }; 

    var closePreview = function() {
      preview.destroy();
    };

    // events control    
    var setOnBack = function(action) {
      onBack = action;
    };

    var setOnMailCheck = function(action) {
      onMailCheck = action;
    };

    var setOnSMSCheck = function(action) {
      onSMSCheck = action;
    };

    var setOnSelectContact = function(action) {
      contactList.onSelection = action;
    };

    var setOnAddContact = function(action) {
      contactAddBtn.onClick = action;
    };

    var setOnEditContact = function(action) {
      contactEditBtn.onClick = action;
    };

    var setOnSelectTopic = function(action) {
      topicList.onSelection = action;
    };

    var setOnPreviewBack = function(action) {
      onPreviewBack = action;
    };

    var setOnPreviewCheck = function(action) {
      onPreviewCheck = action;
    };

    var onBackClick = function() {
      onBack();
    };

    var onMailPreviewClick = function() {
      onMailCheck();
    };
    
    var onSMSPreviewClick = function() {
      onSMSCheck();
    };

    // form view app menu
    var appMenu = [
      ["customerNotification.BACK", "Retour", "left.png", onBackClick],
      ["customerNotification.MAILPREVIEW", "Vérifier mail", "feature_email.png", onMailPreviewClick],
      ["customerNotification.SMSPREVIEW", "Vérifier sms", "check.png", onSMSPreviewClick]
    ];

    otis.application.createAppMenu("customerNotificationMenu", appMenu, sknAppmenu, sknAppmenuF);

    form.preShow = onPreShow;    
    // test

    return {
      display : display,
      displaySelectedContact : displaySelectedContact,
      displayContacts : displayContacts,
      displayTopics : displayTopics,
      displayInterventionDateTime : displayInterventionDateTime,
      close : close,
      displayPreview : displayPreview,
      closePreview : closePreview,
      setOnBack : setOnBack,
      setOnMailCheck : setOnMailCheck,
      setOnSMSCheck : setOnSMSCheck,
      setOnSelectContact : setOnSelectContact,
      setOnAddContact : setOnAddContact,
      setOnEditContact : setOnEditContact,
      setOnSelectTopic : setOnSelectTopic,
      setOnPreviewBack : setOnPreviewBack,
      setOnPreviewCheck : setOnPreviewCheck      
    };
  }();

  // controller definition
  var controller = function() {
    var that = this;

    // public methods
    var close = function() {
      view.close();
      model.reset();
      navigationModel.doReturn();
    };


    // private methods    
    var displaySelectedContactDetail = function() {
      var selectedContact = model.getSelectedContact();
      view.displaySelectedContact(model.getContactMail(), model.getContactPhone());      
    };

    var updateSelectedContact = function(e) {
      var selectedContact = parseInt(e.selectedKeys[0],10);
      model.setSelectedContact(selectedContact);
      displaySelectedContactDetail();
    };

    var modifySelectedContact = function() {
      // TBD
      model.modifyContact();
    };

    var addContact = function() {
      // TBD
      model.addContact();
    };

    var updateSelectedTopic = function(e) {
      var selectedTopic = parseInt(e.selectedKeys[0],10);
      model.setSelectedTopic(selectedTopic);
    };

    var closePreview = function() {
      view.closePreview();
    };

    var validatePreview = function() {
      model.save();
      close();
    };

    var previewMail = function() {
      var torecipients = [model.getContactMail()];
      var subject = model.getSelectedTopic();
      var messagebody = model.getFormattedBody();
      kony.phone.openEmail(torecipients, [""], [""], subject, messagebody);
      //view.displayPreview();
    };
    
    var previewSMS = function() {
      var phonenumber = model.getContactPhone();
      var text = model.getFormattedBody();
      kony.phone.sendSMS(phonenumber, text);
      //view.displayPreview();
    };

    var open = function() {
      // load data model
      model.build();

      // load data view
      view.display();

      var contacts = model.getContacts();
      var formattedViewContacts = [];
      for(var i = 0; i < contacts.length; i++) {
        formattedViewContacts.push([i, contacts[i].name]);
      }
      view.displayContacts(formattedViewContacts, model.getSelectedContact());
      displaySelectedContactDetail();

      var topics = model.getTopics();
      var formattedViewTopics = [];
      for(i = 0; i < topics.length; i++) {
        formattedViewTopics.push([i, topics[i].value]);
      }
      view.displayTopics(formattedViewTopics);

      view.displayInterventionDateTime(model.getInterventionDateTime());


      view.setOnBack(close);
      view.setOnMailCheck(previewMail);
      view.setOnSMSCheck(previewSMS);

      view.setOnSelectContact(updateSelectedContact);
      view.setOnEditContact(modifySelectedContact);
      view.setOnAddContact(addContact);
      view.setOnSelectTopic(updateSelectedTopic);

      view.setOnPreviewBack(closePreview);
      view.setOnPreviewCheck(validatePreview);
    };

    return {
      open : open,
      close : close
    };

  }();

  return {
    start : controller.open,
    end : controller.close
  };
}