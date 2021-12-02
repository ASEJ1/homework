import 'package:flutter/material.dart';


class Authentifier extends StatefulWidget {
    const Authentifier({ Key? key }) : super(key: key);
      @override

  _AuthentifierState createState() => _AuthentifierState();
}

class _AuthentifierState extends State<Authentifier>{

  //var
   late String? username;
   late String? password;

   //key
  GlobalKey<FormState> _globalKey = GlobalKey<FormState>();

  //Life cycle
  @override
  void initState() {
    super.initState();

}


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('G-Store Esprit'),
      ),
      body: Form(
        key: _globalKey,
        child: ListView(
          children: [
            Image.asset('assets/images/minecraft.jpg'),
            SizedBox(height: 50,),
            Container(
            margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child:  TextFormField(
               onSaved: (value) {
                  username = value;
               },
                  validator: (value) {
                  if (value!.isEmpty || value.length < 5) {
                    return 'Username ne doit pas etre vide';
                  }
                },
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Username"),
            ),
          ),
          Container(
            margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child:  TextFormField(    obscureText: true,
                onSaved: (value) {
                  password = value;
                },
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Mot de passe est invalid';
                  }
                },
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Password"),
            ),
          ),
          Container(
            width: 500,
            margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: ElevatedButton(
              child: const Text("S'authentifier"),
              onPressed: (){
                if (_globalKey.currentState!.validate()) {
                      _globalKey.currentState!.save();
                      String message =
                          'Username = $username  \nPassword = $password';
                      showDialog(
                        context: context,
                        builder: (context) {
                          return AlertDialog(
                            title: Text('Information'),
                            content: Text(message),
                            actions: [
                              TextButton(onPressed: (){

                              }, child: Text('Got it'))
                            ],
                          );
                        },
                      );
                    }
                  },
),
          ),
          Container(
            width: 500,
            margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: ElevatedButton(
              onPressed: (){


              },
              style: ButtonStyle(backgroundColor: MaterialStateProperty.all<Color>(Colors.red)),
              child: const Text("Mot de passe oublié ?"),  
              ),
          ),
          Container(
            margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text("Pas encore de compte ?"),
                SizedBox(width: 10,),
                Text("S'inscrire", style: TextStyle(color: Colors.blue),)
              ],
            )
          )


          ],
        ),
      ),
    );
  }
}