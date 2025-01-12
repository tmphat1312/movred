// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-require-imports */
// const fs = require("fs");
// const { chain } = require("stream-chain");
// const { parser } = require("stream-json");
// const { streamArray } = require("stream-json/streamers/StreamArray");
// import { db } from "./db";
// import { movies } from "./schema";
// import { people } from "./schema";
// import { genres } from "./schema";
// import { movieCasts } from "./schema";
// import { movieGenres } from "./schema";
// import { movieCrews } from "./schema";
// import { popularMovies } from "./schema";
// import { trendingMoviesToday } from "./schema";
// import { trendingMoviesThisWeek } from "./schema";
// import { eq } from "drizzle-orm";

// async function main() {
//   await importMoviesFromJson("./tmdb_json/tmdb_db.movies.json");
//   await importPeopleFromLargeJson("./tmdb_json/tmdb_db.people.json");
//   await importGenresFromJson("./tmdb_json/tmdb_db.movie_genres.json");
//   await importMovieGenresFromJson("./tmdb_json/tmdb_db.movies.json");
//   await importMovieCastCrewFromJson("./tmdb_json/tmdb_db.movies.json");
//   await importPopularMovieFromJson("./tmdb_json/tmdb_db.movies_popular.json");
//   await importTrendingMovieTodayFromJson(
//     "./tmdb_json/tmdb_db.movies_trending_day.json",
//   );
//   await importTrendingMovieThisWeekFromJson(
//     "./tmdb_json/tmdb_db.movies_trending_week.json",
//   );
// }

// main().catch((error) => console.error(error));

// export async function importTrendingMovieThisWeekFromJson(
//   jsonFilePath: string,
// ) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       console.log("Chuẩn bị chèn popular vào database:");
//       const existingMovie = await db
//         .select()
//         .from(movies)
//         .where(eq(movies.id, movie.id))
//         .get();

//       if (existingMovie) {
//         await db.insert(trendingMoviesThisWeek).values({
//           movieId: movie.id,
//           mediaType: movie.media_type,
//           popularity: movie.popularity,
//         });

//         console.log(`Đã thêm popular: ${movie.id}`);
//       } else {
//         console.log(`Movie với ID ${movie.id} không tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// export async function importTrendingMovieTodayFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       console.log("Chuẩn bị chèn popular vào database:");
//       const existingMovie = await db
//         .select()
//         .from(movies)
//         .where(eq(movies.id, movie.id))
//         .get();

//       if (existingMovie) {
//         await db.insert(trendingMoviesToday).values({
//           movieId: movie.id,
//           mediaType: movie.media_type,
//           popularity: movie.popularity,
//         });

//         console.log(`Đã thêm popular: ${movie.id}`);
//       } else {
//         console.log(`Movie với ID ${movie.id} không tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// export async function importPopularMovieFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       console.log("Chuẩn bị chèn popular vào database:");
//       const existingMovie = await db
//         .select()
//         .from(movies)
//         .where(eq(movies.id, movie.id))
//         .get();

//       if (existingMovie) {
//         await db.insert(popularMovies).values({
//           movieId: movie.id,
//           popularity: movie.popularity,
//         });

//         console.log(`Đã thêm popular: ${movie.id}`);
//       } else {
//         console.log(`Movie với ID ${movie.id} không tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// export async function importMovieCastCrewFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       console.log("Chuẩn bị chèn movie_genre vào database:", movie.title);
//       const existingMovie = await db
//         .select()
//         .from(movies)
//         .where(eq(movies.id, movie.id))
//         .get();

//       if (existingMovie) {
//         for (const cast of movie.credits.cast) {
//           const existingPerson = await db
//             .select()
//             .from(people)
//             .where(eq(people.id, cast.id))
//             .get();

//           if (existingPerson) {
//             await db.insert(movieCasts).values({
//               id: cast.cast_id,
//               movieId: movie.id,
//               personId: cast.id,
//               character: cast.character,
//               castOrder: cast.order,
//             });

//             console.log(`Đã thêm cast: ${movie.title}`);
//           } else {
//             console.log(`Person với ID ${cast.id} không tồn tại.`);
//           }
//         }

//         for (const crew of movie.credits.crew) {
//           const existingPerson = await db
//             .select()
//             .from(people)
//             .where(eq(people.id, crew.id))
//             .get();

//           if (existingPerson) {
//             await db.insert(movieCrews).values({
//               id: crew.cast_id,
//               movieId: movie.id,
//               personId: crew.id,
//               department: crew.department,
//               job: crew.job,
//               creditId: crew.credit_id,
//             });

//             console.log(`Đã thêm cast: ${movie.title}`);
//           } else {
//             console.log(`Person với ID ${crew.id} không tồn tại.`);
//           }
//         }
//       } else {
//         console.log(`Movie với ID ${movie.id} không tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// export async function importMovieGenresFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       console.log("Chuẩn bị chèn movie_genre vào database:", movie.title);

//       for (const genre of movie.genres) {
//         await db.insert(movieGenres).values({
//           genreId: genre.id,
//           movieId: movie.id,
//         });

//         console.log(`Đã thêm movie_genre: ${movie.title} - ${genre.name}`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// async function importGenresFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON vào bảng `genres`...");

//   // Tạo pipeline xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }),
//     parser(),
//     streamArray(),
//   ]);

//   pipeline.on("data", async ({ value: genre }: { value: any }) => {
//     try {
//       console.log("Đang xử lý thể loại:", genre.name);

//       const existingGenre = await db
//         .select()
//         .from(genres)
//         .where(eq(genres.id, genre.id))
//         .get();

//       if (!existingGenre) {
//         await db.insert(genres).values({
//           id: genre.id,
//           tmdbId: genre.tmdb_id,
//           name: genre.name,
//         });

//         console.log(`Đã thêm thể loại: ${genre.name}`);
//       } else {
//         console.log(`Thể loại với ID ${genre.id} đã tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý thể loại:", error);
//     }
//   });
// }

// async function importPeopleFromLargeJson(filePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn vào bảng `people`...");

//   // Tạo pipeline xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(filePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích cú pháp JSON
//     streamArray(), // Lấy từng phần tử trong mảng JSON
//   ]);

//   // Xử lý từng phần tử JSON trong sự kiện "data"
//   pipeline.on("data", async ({ value: person }: { value: any }) => {
//     try {
//       console.log("Đang xử lý người:", person.name);

//       // Kiểm tra nếu person ID đã tồn tại trong database
//       const existingPerson = await db
//         .select()
//         .from(people)
//         .where(eq(people.id, person.id))
//         .get();

//       if (!existingPerson) {
//         await db.insert(people).values({
//           id: person.id,
//           tmdbId: person.tmdb_id,
//           name: person.name,
//           originalName: person.original_name,
//           gender: person.gender,
//           adult: person.adult ? 1 : 0, // Chuyển boolean thành số
//           biography: person.biography,
//           birthday: person.birthday,
//           deathday: person.deathday || null, // Xử lý giá trị null
//           placeOfBirth: person.place_of_birth,
//           knownForDepartment: person.known_for_department,
//           popularity: person.popularity,
//           profilePath: person.profile_path,
//           homepage: person.homepage,
//           imdbId: person.imdb_id,
//         });

//         console.log(`Đã thêm người: ${person.name}`);
//       } else {
//         console.log(`Người với ID ${person.id} đã tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý người:", error);
//     }
//   });

//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu vào bảng `people` hoàn tất!");
//   });

//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }

// // Hàm nhập dữ liệu từ file JSON vào bảng movies
// export async function importMoviesFromJson(jsonFilePath: string) {
//   console.log("Bắt đầu nhập dữ liệu từ file JSON lớn...");

//   // Chuỗi xử lý Stream
//   const pipeline = chain([
//     fs.createReadStream(jsonFilePath, { encoding: "utf-8" }), // Đọc file JSON
//     parser(), // Phân tích JSON
//     streamArray(), // Lấy từng mục trong mảng JSON
//   ]);

//   // Xử lý từng phần tử trong JSON
//   pipeline.on("data", async ({ value: movie }: { value: any }) => {
//     try {
//       const existingMovie = await db
//         .select()
//         .from(movies)
//         .where(eq(movies.id, movie.id))
//         .get();

//       if (!existingMovie) {
//         console.log("Chuẩn bị chèn movie vào database:", movie.title);

//         // Chèn dữ liệu nếu ID chưa tồn tại
//         await db.insert(movies).values({
//           id: movie.id,
//           tmdbId: movie.tmdb_id,
//           title: movie.title,
//           originalTitle: movie.original_title,
//           originalLanguage: movie.original_language,
//           overview: movie.overview,
//           tagline: movie.tagline,
//           homepage: movie.homepage,
//           imdbId: movie.imdb_id,
//           releaseDate: movie.release_date,
//           runtime: movie.runtime,
//           budget: movie.budget,
//           revenue: movie.revenue,
//           popularity: movie.popularity,
//           voteAverage: movie.vote_average,
//           voteCount: movie.vote_count,
//           status: movie.status,
//           video: movie.video ? 1 : 0,
//           adult: movie.adult ? 1 : 0,
//           backdropPath: movie.backdrop_path,
//           posterPath: movie.poster_path,
//         });
//         console.log(`Đã thêm movie: ${movie.title}`);
//       } else {
//         console.log(`Movie với ID ${movie.id} đã tồn tại.`);
//       }
//     } catch (error) {
//       console.error("Lỗi khi xử lý movie:", error);
//     }
//   });

//   // Khi pipeline kết thúc
//   pipeline.on("end", () => {
//     console.log("Nhập dữ liệu hoàn tất!");
//   });

//   // Khi có lỗi xảy ra trong pipeline
//   pipeline.on("error", (error: any) => {
//     console.error("Lỗi khi đọc file JSON:", error);
//   });
// }
