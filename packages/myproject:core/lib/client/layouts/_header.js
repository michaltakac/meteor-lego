Template['_header'].events({
  'click [data-action=logout]' : function(e) {
    e.preventDefault();
    AccountsTemplates.logout();
  }
});
