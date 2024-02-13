FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
# Copy everything
WORKDIR /app
# Restore as distinct layers
COPY . ./
# Build and publish a release
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 8080
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080
ENV POST_CD="TRT.PROD"
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ExamplePostApp-Modernized.dll"]


