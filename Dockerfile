# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /App
COPY /App/out .
ENTRYPOINT ["dotnet", "ExamplePostApp-Modernized.dll"]
