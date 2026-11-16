var builder = WebApplication.CreateBuilder(args);

// Dev-only: allow the Ionic web app, iOS (capacitor://localhost) and Android (http://localhost) webviews.
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();
app.UseCors();

var items = Enumerable.Range(1, 20)
    .Select(i => new Item(i, $"Item {i}", $"Dummy description for item {i}", i * 5))
    .ToList();

var contacts = new List<Contact>
{
    new(1, "Ada Lovelace", "ada@example.com"),
    new(2, "Grace Hopper", "grace@example.com"),
    new(3, "Alan Turing", "alan@example.com"),
    new(4, "Linus Torvalds", "linus@example.com"),
    new(5, "Margaret Hamilton", "margaret@example.com"),
};

app.MapGet("/", () => "Test API is running");
app.MapGet("/api/items", () => items);
app.MapGet("/api/items/{id:int}", (int id) =>
    items.FirstOrDefault(i => i.Id == id) is { } item ? Results.Ok(item) : Results.NotFound());
app.MapGet("/api/contacts", () => contacts);

app.Run();

record Item(int Id, string Name, string Description, int Quantity);
record Contact(int Id, string Name, string Email);
