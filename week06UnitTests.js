var expect = chai.expect;

describe('Functions Relating to the Deck Object', function() 
{
  describe('#createCardsForDeck', function() //make sure the WAR deck is created correctly
  {
    it('should return a deck of 52 cards', function() 
    {
        var deck = new Deck;
        deck.createCardsForDeck()
        expect(deck.cards.length).to.equal(52) //size of the deck should be 52 after the function runs
    });
    it('should create a deck of all card objects', function() 
    {
        var deck = new Deck;
        deck.createCardsForDeck()
        for(let i = 0; i < deck.cards.length; i++)
        {
            expect(typeof(deck.cards[i])).to.equal("object") 
        }
    });
  });
  describe('#deal', function()
  {
    it('shoud deal 26 cards to Player 1', function() 
    {
        var deck = new Deck;
        var player1 = new Player;
        var player2 = new Player;
        deck.createCardsForDeck()
        deck.deal(player1, player2)
        expect(player1.deck.length).to.equal(26)
    });
    it('shoud deal 26 cards to Player 2', function() 
    {
        var deck = new Deck;
        var player1 = new Player;
        var player2 = new Player;
        deck.createCardsForDeck()
        deck.deal(player1, player2)
        expect(player2.deck.length).to.equal(26)
    });
  });
});