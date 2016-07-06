oprn {{#loggedIn}}
    Welcome back, {{name}}!
    You have {{messages.length}} new messages.
{{/loggedIn}}
{{^loggedIn}}
    Do you want to login?
{{/loggedIn}}
