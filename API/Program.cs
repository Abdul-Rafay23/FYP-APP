using Api_ProgrmmingCommunity.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Enable CORS - Allow requests from your frontend React app
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        builder.WithOrigins("http://localhost:5173")  // Allow the React app to make requests
               .AllowAnyMethod()                     // Allow all HTTP methods (GET, POST, etc.)
               .AllowAnyHeader();                    // Allow all headers
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ProgrammingCommunityContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

// Enable CORS middleware to allow requests from the frontend
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
