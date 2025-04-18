
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Candidate
 * 
 */
export type Candidate = $Result.DefaultSelection<Prisma.$CandidatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Candidates
 * const candidates = await prisma.candidate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Candidates
   * const candidates = await prisma.candidate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.candidate`: Exposes CRUD operations for the **Candidate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidate.findMany()
    * ```
    */
  get candidate(): Prisma.CandidateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Candidate: 'Candidate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "candidate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Candidate: {
        payload: Prisma.$CandidatePayload<ExtArgs>
        fields: Prisma.CandidateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findFirst: {
            args: Prisma.CandidateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          findMany: {
            args: Prisma.CandidateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          create: {
            args: Prisma.CandidateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          createMany: {
            args: Prisma.CandidateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          delete: {
            args: Prisma.CandidateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          update: {
            args: Prisma.CandidateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          deleteMany: {
            args: Prisma.CandidateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>[]
          }
          upsert: {
            args: Prisma.CandidateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidatePayload>
          }
          aggregate: {
            args: Prisma.CandidateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidate>
          }
          groupBy: {
            args: Prisma.CandidateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    candidate?: CandidateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Candidate
   */

  export type AggregateCandidate = {
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  export type CandidateMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    behavioralAnswer: string | null
    audioResponseUrl: string | null
    videoResponseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    behavioralAnswer: string | null
    audioResponseUrl: string | null
    videoResponseUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CandidateCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    resumeUrl: number
    behavioralAnswer: number
    audioResponseUrl: number
    videoResponseUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CandidateMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    behavioralAnswer?: true
    audioResponseUrl?: true
    videoResponseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    behavioralAnswer?: true
    audioResponseUrl?: true
    videoResponseUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CandidateCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    behavioralAnswer?: true
    audioResponseUrl?: true
    videoResponseUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CandidateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidate to aggregate.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidates
    **/
    _count?: true | CandidateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateMaxAggregateInputType
  }

  export type GetCandidateAggregateType<T extends CandidateAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidate[P]>
      : GetScalarType<T[P], AggregateCandidate[P]>
  }




  export type CandidateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateWhereInput
    orderBy?: CandidateOrderByWithAggregationInput | CandidateOrderByWithAggregationInput[]
    by: CandidateScalarFieldEnum[] | CandidateScalarFieldEnum
    having?: CandidateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateCountAggregateInputType | true
    _min?: CandidateMinAggregateInputType
    _max?: CandidateMaxAggregateInputType
  }

  export type CandidateGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    resumeUrl: string | null
    behavioralAnswer: string | null
    audioResponseUrl: string | null
    videoResponseUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CandidateCountAggregateOutputType | null
    _min: CandidateMinAggregateOutputType | null
    _max: CandidateMaxAggregateOutputType | null
  }

  type GetCandidateGroupByPayload<T extends CandidateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    behavioralAnswer?: boolean
    audioResponseUrl?: boolean
    videoResponseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    behavioralAnswer?: boolean
    audioResponseUrl?: boolean
    videoResponseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    behavioralAnswer?: boolean
    audioResponseUrl?: boolean
    videoResponseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["candidate"]>

  export type CandidateSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    behavioralAnswer?: boolean
    audioResponseUrl?: boolean
    videoResponseUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CandidateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "resumeUrl" | "behavioralAnswer" | "audioResponseUrl" | "videoResponseUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["candidate"]>

  export type $CandidatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      resumeUrl: string | null
      behavioralAnswer: string | null
      audioResponseUrl: string | null
      videoResponseUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["candidate"]>
    composites: {}
  }

  type CandidateGetPayload<S extends boolean | null | undefined | CandidateDefaultArgs> = $Result.GetResult<Prisma.$CandidatePayload, S>

  type CandidateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateCountAggregateInputType | true
    }

  export interface CandidateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidate'], meta: { name: 'Candidate' } }
    /**
     * Find zero or one Candidate that matches the filter.
     * @param {CandidateFindUniqueArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateFindUniqueArgs>(args: SelectSubset<T, CandidateFindUniqueArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateFindUniqueOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateFindFirstArgs>(args?: SelectSubset<T, CandidateFindFirstArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindFirstOrThrowArgs} args - Arguments to find a Candidate
     * @example
     * // Get one Candidate
     * const candidate = await prisma.candidate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidate.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidateWithIdOnly = await prisma.candidate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidateFindManyArgs>(args?: SelectSubset<T, CandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidate.
     * @param {CandidateCreateArgs} args - Arguments to create a Candidate.
     * @example
     * // Create one Candidate
     * const Candidate = await prisma.candidate.create({
     *   data: {
     *     // ... data to create a Candidate
     *   }
     * })
     * 
     */
    create<T extends CandidateCreateArgs>(args: SelectSubset<T, CandidateCreateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {CandidateCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateCreateManyArgs>(args?: SelectSubset<T, CandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidates and returns the data saved in the database.
     * @param {CandidateCreateManyAndReturnArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidate = await prisma.candidate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidate.
     * @param {CandidateDeleteArgs} args - Arguments to delete one Candidate.
     * @example
     * // Delete one Candidate
     * const Candidate = await prisma.candidate.delete({
     *   where: {
     *     // ... filter to delete one Candidate
     *   }
     * })
     * 
     */
    delete<T extends CandidateDeleteArgs>(args: SelectSubset<T, CandidateDeleteArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidate.
     * @param {CandidateUpdateArgs} args - Arguments to update one Candidate.
     * @example
     * // Update one Candidate
     * const candidate = await prisma.candidate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateUpdateArgs>(args: SelectSubset<T, CandidateUpdateArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {CandidateDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateDeleteManyArgs>(args?: SelectSubset<T, CandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateUpdateManyArgs>(args: SelectSubset<T, CandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates and returns the data updated in the database.
     * @param {CandidateUpdateManyAndReturnArgs} args - Arguments to update many Candidates.
     * @example
     * // Update many Candidates
     * const candidate = await prisma.candidate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidates and only return the `id`
     * const candidateWithIdOnly = await prisma.candidate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CandidateUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidate.
     * @param {CandidateUpsertArgs} args - Arguments to update or create a Candidate.
     * @example
     * // Update or create a Candidate
     * const candidate = await prisma.candidate.upsert({
     *   create: {
     *     // ... data to create a Candidate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidate we want to update
     *   }
     * })
     */
    upsert<T extends CandidateUpsertArgs>(args: SelectSubset<T, CandidateUpsertArgs<ExtArgs>>): Prisma__CandidateClient<$Result.GetResult<Prisma.$CandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidate.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends CandidateCountArgs>(
      args?: Subset<T, CandidateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CandidateAggregateArgs>(args: Subset<T, CandidateAggregateArgs>): Prisma.PrismaPromise<GetCandidateAggregateType<T>>

    /**
     * Group by Candidate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CandidateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateGroupByArgs['orderBy'] }
        : { orderBy?: CandidateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidate model
   */
  readonly fields: CandidateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Candidate model
   */
  interface CandidateFieldRefs {
    readonly id: FieldRef<"Candidate", 'String'>
    readonly name: FieldRef<"Candidate", 'String'>
    readonly email: FieldRef<"Candidate", 'String'>
    readonly phone: FieldRef<"Candidate", 'String'>
    readonly resumeUrl: FieldRef<"Candidate", 'String'>
    readonly behavioralAnswer: FieldRef<"Candidate", 'String'>
    readonly audioResponseUrl: FieldRef<"Candidate", 'String'>
    readonly videoResponseUrl: FieldRef<"Candidate", 'String'>
    readonly createdAt: FieldRef<"Candidate", 'DateTime'>
    readonly updatedAt: FieldRef<"Candidate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidate findUnique
   */
  export type CandidateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findUniqueOrThrow
   */
  export type CandidateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate findFirst
   */
  export type CandidateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findFirstOrThrow
   */
  export type CandidateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter, which Candidate to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidates.
     */
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate findMany
   */
  export type CandidateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter, which Candidates to fetch.
     */
    where?: CandidateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidates to fetch.
     */
    orderBy?: CandidateOrderByWithRelationInput | CandidateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidates.
     */
    cursor?: CandidateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidates.
     */
    skip?: number
    distinct?: CandidateScalarFieldEnum | CandidateScalarFieldEnum[]
  }

  /**
   * Candidate create
   */
  export type CandidateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data needed to create a Candidate.
     */
    data: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
  }

  /**
   * Candidate createMany
   */
  export type CandidateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
  }

  /**
   * Candidate createManyAndReturn
   */
  export type CandidateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to create many Candidates.
     */
    data: CandidateCreateManyInput | CandidateCreateManyInput[]
  }

  /**
   * Candidate update
   */
  export type CandidateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data needed to update a Candidate.
     */
    data: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
    /**
     * Choose, which Candidate to update.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate updateMany
   */
  export type CandidateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate updateManyAndReturn
   */
  export type CandidateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The data used to update Candidates.
     */
    data: XOR<CandidateUpdateManyMutationInput, CandidateUncheckedUpdateManyInput>
    /**
     * Filter which Candidates to update
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to update.
     */
    limit?: number
  }

  /**
   * Candidate upsert
   */
  export type CandidateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * The filter to search for the Candidate to update in case it exists.
     */
    where: CandidateWhereUniqueInput
    /**
     * In case the Candidate found by the `where` argument doesn't exist, create a new Candidate with this data.
     */
    create: XOR<CandidateCreateInput, CandidateUncheckedCreateInput>
    /**
     * In case the Candidate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateUpdateInput, CandidateUncheckedUpdateInput>
  }

  /**
   * Candidate delete
   */
  export type CandidateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
    /**
     * Filter which Candidate to delete.
     */
    where: CandidateWhereUniqueInput
  }

  /**
   * Candidate deleteMany
   */
  export type CandidateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidates to delete
     */
    where?: CandidateWhereInput
    /**
     * Limit how many Candidates to delete.
     */
    limit?: number
  }

  /**
   * Candidate without action
   */
  export type CandidateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidate
     */
    select?: CandidateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidate
     */
    omit?: CandidateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CandidateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    resumeUrl: 'resumeUrl',
    behavioralAnswer: 'behavioralAnswer',
    audioResponseUrl: 'audioResponseUrl',
    videoResponseUrl: 'videoResponseUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CandidateScalarFieldEnum = (typeof CandidateScalarFieldEnum)[keyof typeof CandidateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type CandidateWhereInput = {
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    id?: StringFilter<"Candidate"> | string
    name?: StringFilter<"Candidate"> | string
    email?: StringFilter<"Candidate"> | string
    phone?: StringFilter<"Candidate"> | string
    resumeUrl?: StringNullableFilter<"Candidate"> | string | null
    behavioralAnswer?: StringNullableFilter<"Candidate"> | string | null
    audioResponseUrl?: StringNullableFilter<"Candidate"> | string | null
    videoResponseUrl?: StringNullableFilter<"Candidate"> | string | null
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
  }

  export type CandidateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    behavioralAnswer?: SortOrderInput | SortOrder
    audioResponseUrl?: SortOrderInput | SortOrder
    videoResponseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CandidateWhereInput | CandidateWhereInput[]
    OR?: CandidateWhereInput[]
    NOT?: CandidateWhereInput | CandidateWhereInput[]
    name?: StringFilter<"Candidate"> | string
    phone?: StringFilter<"Candidate"> | string
    resumeUrl?: StringNullableFilter<"Candidate"> | string | null
    behavioralAnswer?: StringNullableFilter<"Candidate"> | string | null
    audioResponseUrl?: StringNullableFilter<"Candidate"> | string | null
    videoResponseUrl?: StringNullableFilter<"Candidate"> | string | null
    createdAt?: DateTimeFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeFilter<"Candidate"> | Date | string
  }, "id" | "email">

  export type CandidateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    behavioralAnswer?: SortOrderInput | SortOrder
    audioResponseUrl?: SortOrderInput | SortOrder
    videoResponseUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CandidateCountOrderByAggregateInput
    _max?: CandidateMaxOrderByAggregateInput
    _min?: CandidateMinOrderByAggregateInput
  }

  export type CandidateScalarWhereWithAggregatesInput = {
    AND?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    OR?: CandidateScalarWhereWithAggregatesInput[]
    NOT?: CandidateScalarWhereWithAggregatesInput | CandidateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidate"> | string
    name?: StringWithAggregatesFilter<"Candidate"> | string
    email?: StringWithAggregatesFilter<"Candidate"> | string
    phone?: StringWithAggregatesFilter<"Candidate"> | string
    resumeUrl?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    behavioralAnswer?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    audioResponseUrl?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    videoResponseUrl?: StringNullableWithAggregatesFilter<"Candidate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Candidate"> | Date | string
  }

  export type CandidateCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    behavioralAnswer?: string | null
    audioResponseUrl?: string | null
    videoResponseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    behavioralAnswer?: string | null
    audioResponseUrl?: string | null
    videoResponseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    resumeUrl?: string | null
    behavioralAnswer?: string | null
    audioResponseUrl?: string | null
    videoResponseUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CandidateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    behavioralAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    audioResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoResponseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CandidateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    behavioralAnswer?: SortOrder
    audioResponseUrl?: SortOrder
    videoResponseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    behavioralAnswer?: SortOrder
    audioResponseUrl?: SortOrder
    videoResponseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CandidateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    behavioralAnswer?: SortOrder
    audioResponseUrl?: SortOrder
    videoResponseUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}