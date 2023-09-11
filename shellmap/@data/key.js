const keybind = require("keybind")
const key = require("./.key")
const bind = new keybind.Start().config([
    "PERMISSION_GRANT_CREATE_BIND",
    "PERMISSION_GRANT_CREATE_BUN"
])
const obyma_bind = require("@instar/obyma/bind")
bind.bun("CTRL-F", {
  // key == true 
   if(user.passed==true){ 
    process.exit()
    save.in()
}
});
bind.bun("CTRL-V", {
   //key == true 
   if(user.passed==true){ 
    bind.create("AFK is allowed because you code in cloud storage save in 24/7")
}
});
bind.bun("CTRL-ALT-F1", {
  // key == true 
   if(user.passed==true){ 
    UI.join("com.cloud_storage.obyma.hidden")
}
});
bind.bun("F1", {
   //key == true 
   if(user.passed==true){ 
    bind.createUI(obyma_bind.find)
    bind.create("Find anyways on ObmiSearch")
    UI.send(obyma_bind.find.history<Promise>)
}
});
bind.bun("F2", {
  // key == true 
   if(user.passed==true){ 
    UI.join("com.cloud_storage.obyma_server")
}
});
bind.bun("F3", {
   //key == true 
   if(user.passed==true){ 
    UI.hostServer()
    UI.set ()
    .setServerIP("0.0.0.0")
    .setServerPort(8080)
    Obyma.Log ("ObymaServer hosted")

});







