import 'package:flutter/material.dart';
import 'product_info.dart';

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {

  //var
  final List<Game> games = const [
   Game("assets/images/dmc5.jpg", "Devil May Cry 5", 200),
   Game("assets/images/re8.jpg", "Resident Evil VIII", 200),
   Game("assets/images/nfs.jpg", "Need For Speed Heat", 100),
   Game("assets/images/rdr2.jpg", "Red Dead Redemption II", 150),
   Game("assets/images/fifa.jpg", "FIFA 22", 100)
  ];

  //init
  @override
  void initState() {
    super.initState();
    //TO DO
    
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("G-Store ESPRIT"),
      ),
      body: ListView.builder(
        itemCount: games.length,
        itemBuilder: (context, index) {
        return ProductInfo(games[index].image, games[index].title, games[index].price);
      },)
    );
  }
}

//ENTITY
class Game {

final String image;
final String title;
final int price;

const Game(this.image, this.title, this.price);
}
