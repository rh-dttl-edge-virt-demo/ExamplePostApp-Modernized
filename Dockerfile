# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 8080
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080
ENV POST_CD="TRT.PROD"
COPY /app .
ENTRYPOINT ["dotnet", "ExamplePostApp-Modernized.dll"]
