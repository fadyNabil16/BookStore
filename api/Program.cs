using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using api.Data;
using api.Interfaces;
using api.Models;
using api.Repositories;
using api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();


builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("CorsPolicy",
//         builder =>
//         {
//             builder.WithOrigins("http://localhost:5173")
//                    .AllowAnyMethod()
//                    .AllowAnyHeader();
//         });
// });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddSwaggerGen();


builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.AddDbContext<StoreDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<IBookRepository, BookRepository>();
builder.Services.AddScoped<ITockenServices, TokenServices>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();


builder.Services.AddIdentity<User, IdentityRole>(options =>
{
    options.Password.RequireDigit = false;
    // options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = false;
    options.Password.RequireNonAlphanumeric = false;
    // options.Password.RequiredLength = 12;
})
.AddEntityFrameworkStores<StoreDbContext>();


// Adding policies
// builder.Services.AddAuthorization(options =>
// {
//     options.AddPolicy("AdminPolicy", new AuthorizationPolicyBuilder().RequireRole("Admin").Build());
// });

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
    options.DefaultChallengeScheme =
    options.DefaultForbidScheme =
    options.DefaultScheme =
    options.DefaultSignInScheme =
    options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
}
).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:SigningKey"])
        ),
        // RoleClaimType = ClaimsIdentity.DefaultRoleClaimType,
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// app.UseJwtBearerAuthentication(new JwtBearerOptions
// {
//     AutomaticAuthenticate = true,
//     AutomaticChallenge = true
// });
app.UseHttpsRedirection();
app.UseAuthentication();
// app.UseCors("CorsPolicy");
// app.UseCors(x => x
//      .AllowAnyMethod()
//      .AllowAnyHeader()
//      .AllowCredentials()
//       //.WithOrigins("https://localhost:44351))
//       .SetIsOriginAllowed(origin => true));


app.UseAuthorization();

app.MapControllers();

app.Run();


