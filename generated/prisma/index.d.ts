
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
 * Model Dealership
 * 
 */
export type Dealership = $Result.DefaultSelection<Prisma.$DealershipPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ProductCompany
 * 
 */
export type ProductCompany = $Result.DefaultSelection<Prisma.$ProductCompanyPayload>
/**
 * Model BayerProduct
 * 
 */
export type BayerProduct = $Result.DefaultSelection<Prisma.$BayerProductPayload>
/**
 * Model SeedProduct
 * 
 */
export type SeedProduct = $Result.DefaultSelection<Prisma.$SeedProductPayload>
/**
 * Model RegularProduct
 * 
 */
export type RegularProduct = $Result.DefaultSelection<Prisma.$RegularProductPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model PurchaseOrderItem
 * 
 */
export type PurchaseOrderItem = $Result.DefaultSelection<Prisma.$PurchaseOrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CompanyType: {
  Seed: 'Seed',
  Bayer: 'Bayer',
  Regular: 'Regular'
};

export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType]


export const CropType: {
  Corn: 'Corn',
  Sorghum: 'Sorghum',
  Soybean: 'Soybean',
  Canola: 'Canola',
  Alfalfa: 'Alfalfa',
  Palletbox: 'Palletbox'
};

export type CropType = (typeof CropType)[keyof typeof CropType]

}

export type CompanyType = $Enums.CompanyType

export const CompanyType: typeof $Enums.CompanyType

export type CropType = $Enums.CropType

export const CropType: typeof $Enums.CropType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dealerships
 * const dealerships = await prisma.dealership.findMany()
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
   * // Fetch zero or more Dealerships
   * const dealerships = await prisma.dealership.findMany()
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
   * `prisma.dealership`: Exposes CRUD operations for the **Dealership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dealerships
    * const dealerships = await prisma.dealership.findMany()
    * ```
    */
  get dealership(): Prisma.DealershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCompany`: Exposes CRUD operations for the **ProductCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCompanies
    * const productCompanies = await prisma.productCompany.findMany()
    * ```
    */
  get productCompany(): Prisma.ProductCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bayerProduct`: Exposes CRUD operations for the **BayerProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BayerProducts
    * const bayerProducts = await prisma.bayerProduct.findMany()
    * ```
    */
  get bayerProduct(): Prisma.BayerProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seedProduct`: Exposes CRUD operations for the **SeedProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeedProducts
    * const seedProducts = await prisma.seedProduct.findMany()
    * ```
    */
  get seedProduct(): Prisma.SeedProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regularProduct`: Exposes CRUD operations for the **RegularProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegularProducts
    * const regularProducts = await prisma.regularProduct.findMany()
    * ```
    */
  get regularProduct(): Prisma.RegularProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrderItem`: Exposes CRUD operations for the **PurchaseOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrderItems
    * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany()
    * ```
    */
  get purchaseOrderItem(): Prisma.PurchaseOrderItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    Dealership: 'Dealership',
    Customer: 'Customer',
    ProductCompany: 'ProductCompany',
    BayerProduct: 'BayerProduct',
    SeedProduct: 'SeedProduct',
    RegularProduct: 'RegularProduct',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderItem: 'PurchaseOrderItem'
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
      modelProps: "dealership" | "customer" | "productCompany" | "bayerProduct" | "seedProduct" | "regularProduct" | "purchaseOrder" | "purchaseOrderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dealership: {
        payload: Prisma.$DealershipPayload<ExtArgs>
        fields: Prisma.DealershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          findFirst: {
            args: Prisma.DealershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          findMany: {
            args: Prisma.DealershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>[]
          }
          create: {
            args: Prisma.DealershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          createMany: {
            args: Prisma.DealershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>[]
          }
          delete: {
            args: Prisma.DealershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          update: {
            args: Prisma.DealershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          deleteMany: {
            args: Prisma.DealershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>[]
          }
          upsert: {
            args: Prisma.DealershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipPayload>
          }
          aggregate: {
            args: Prisma.DealershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealership>
          }
          groupBy: {
            args: Prisma.DealershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealershipCountArgs<ExtArgs>
            result: $Utils.Optional<DealershipCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ProductCompany: {
        payload: Prisma.$ProductCompanyPayload<ExtArgs>
        fields: Prisma.ProductCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          findFirst: {
            args: Prisma.ProductCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          findMany: {
            args: Prisma.ProductCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>[]
          }
          create: {
            args: Prisma.ProductCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          createMany: {
            args: Prisma.ProductCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>[]
          }
          delete: {
            args: Prisma.ProductCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          update: {
            args: Prisma.ProductCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          deleteMany: {
            args: Prisma.ProductCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>[]
          }
          upsert: {
            args: Prisma.ProductCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCompanyPayload>
          }
          aggregate: {
            args: Prisma.ProductCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCompany>
          }
          groupBy: {
            args: Prisma.ProductCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCompanyCountAggregateOutputType> | number
          }
        }
      }
      BayerProduct: {
        payload: Prisma.$BayerProductPayload<ExtArgs>
        fields: Prisma.BayerProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BayerProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BayerProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          findFirst: {
            args: Prisma.BayerProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BayerProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          findMany: {
            args: Prisma.BayerProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>[]
          }
          create: {
            args: Prisma.BayerProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          createMany: {
            args: Prisma.BayerProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BayerProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>[]
          }
          delete: {
            args: Prisma.BayerProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          update: {
            args: Prisma.BayerProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          deleteMany: {
            args: Prisma.BayerProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BayerProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BayerProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>[]
          }
          upsert: {
            args: Prisma.BayerProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BayerProductPayload>
          }
          aggregate: {
            args: Prisma.BayerProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBayerProduct>
          }
          groupBy: {
            args: Prisma.BayerProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<BayerProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.BayerProductCountArgs<ExtArgs>
            result: $Utils.Optional<BayerProductCountAggregateOutputType> | number
          }
        }
      }
      SeedProduct: {
        payload: Prisma.$SeedProductPayload<ExtArgs>
        fields: Prisma.SeedProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeedProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeedProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          findFirst: {
            args: Prisma.SeedProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeedProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          findMany: {
            args: Prisma.SeedProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>[]
          }
          create: {
            args: Prisma.SeedProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          createMany: {
            args: Prisma.SeedProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeedProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>[]
          }
          delete: {
            args: Prisma.SeedProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          update: {
            args: Prisma.SeedProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          deleteMany: {
            args: Prisma.SeedProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeedProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeedProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>[]
          }
          upsert: {
            args: Prisma.SeedProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedProductPayload>
          }
          aggregate: {
            args: Prisma.SeedProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeedProduct>
          }
          groupBy: {
            args: Prisma.SeedProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeedProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeedProductCountArgs<ExtArgs>
            result: $Utils.Optional<SeedProductCountAggregateOutputType> | number
          }
        }
      }
      RegularProduct: {
        payload: Prisma.$RegularProductPayload<ExtArgs>
        fields: Prisma.RegularProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegularProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegularProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          findFirst: {
            args: Prisma.RegularProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegularProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          findMany: {
            args: Prisma.RegularProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>[]
          }
          create: {
            args: Prisma.RegularProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          createMany: {
            args: Prisma.RegularProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegularProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>[]
          }
          delete: {
            args: Prisma.RegularProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          update: {
            args: Prisma.RegularProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          deleteMany: {
            args: Prisma.RegularProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegularProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegularProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>[]
          }
          upsert: {
            args: Prisma.RegularProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegularProductPayload>
          }
          aggregate: {
            args: Prisma.RegularProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegularProduct>
          }
          groupBy: {
            args: Prisma.RegularProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegularProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegularProductCountArgs<ExtArgs>
            result: $Utils.Optional<RegularProductCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrderItem: {
        payload: Prisma.$PurchaseOrderItemPayload<ExtArgs>
        fields: Prisma.PurchaseOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          update: {
            args: Prisma.PurchaseOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrderItem>
          }
          groupBy: {
            args: Prisma.PurchaseOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderItemCountAggregateOutputType> | number
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
    dealership?: DealershipOmit
    customer?: CustomerOmit
    productCompany?: ProductCompanyOmit
    bayerProduct?: BayerProductOmit
    seedProduct?: SeedProductOmit
    regularProduct?: RegularProductOmit
    purchaseOrder?: PurchaseOrderOmit
    purchaseOrderItem?: PurchaseOrderItemOmit
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
   * Count Type DealershipCountOutputType
   */

  export type DealershipCountOutputType = {
    Customer: number
    ProductCompany: number
  }

  export type DealershipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | DealershipCountOutputTypeCountCustomerArgs
    ProductCompany?: boolean | DealershipCountOutputTypeCountProductCompanyArgs
  }

  // Custom InputTypes
  /**
   * DealershipCountOutputType without action
   */
  export type DealershipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipCountOutputType
     */
    select?: DealershipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealershipCountOutputType without action
   */
  export type DealershipCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * DealershipCountOutputType without action
   */
  export type DealershipCountOutputTypeCountProductCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCompanyWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    PurchaseOrder: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | CustomerCountOutputTypeCountPurchaseOrderArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Count Type ProductCompanyCountOutputType
   */

  export type ProductCompanyCountOutputType = {
    SeedProduct: number
    BayerProduct: number
    RegularProduct: number
  }

  export type ProductCompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SeedProduct?: boolean | ProductCompanyCountOutputTypeCountSeedProductArgs
    BayerProduct?: boolean | ProductCompanyCountOutputTypeCountBayerProductArgs
    RegularProduct?: boolean | ProductCompanyCountOutputTypeCountRegularProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCompanyCountOutputType without action
   */
  export type ProductCompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompanyCountOutputType
     */
    select?: ProductCompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCompanyCountOutputType without action
   */
  export type ProductCompanyCountOutputTypeCountSeedProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedProductWhereInput
  }

  /**
   * ProductCompanyCountOutputType without action
   */
  export type ProductCompanyCountOutputTypeCountBayerProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BayerProductWhereInput
  }

  /**
   * ProductCompanyCountOutputType without action
   */
  export type ProductCompanyCountOutputTypeCountRegularProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularProductWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    PurchaseOrderItem: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrderItem?: boolean | PurchaseOrderCountOutputTypeCountPurchaseOrderItemArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountPurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Dealership
   */

  export type AggregateDealership = {
    _count: DealershipCountAggregateOutputType | null
    _avg: DealershipAvgAggregateOutputType | null
    _sum: DealershipSumAggregateOutputType | null
    _min: DealershipMinAggregateOutputType | null
    _max: DealershipMaxAggregateOutputType | null
  }

  export type DealershipAvgAggregateOutputType = {
    id: number | null
  }

  export type DealershipSumAggregateOutputType = {
    id: number | null
  }

  export type DealershipMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    isDeleted: boolean | null
  }

  export type DealershipMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    isDeleted: boolean | null
  }

  export type DealershipCountAggregateOutputType = {
    id: number
    name: number
    password: number
    isDeleted: number
    _all: number
  }


  export type DealershipAvgAggregateInputType = {
    id?: true
  }

  export type DealershipSumAggregateInputType = {
    id?: true
  }

  export type DealershipMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    isDeleted?: true
  }

  export type DealershipMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    isDeleted?: true
  }

  export type DealershipCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    isDeleted?: true
    _all?: true
  }

  export type DealershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealership to aggregate.
     */
    where?: DealershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealerships to fetch.
     */
    orderBy?: DealershipOrderByWithRelationInput | DealershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dealerships
    **/
    _count?: true | DealershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealershipMaxAggregateInputType
  }

  export type GetDealershipAggregateType<T extends DealershipAggregateArgs> = {
        [P in keyof T & keyof AggregateDealership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealership[P]>
      : GetScalarType<T[P], AggregateDealership[P]>
  }




  export type DealershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealershipWhereInput
    orderBy?: DealershipOrderByWithAggregationInput | DealershipOrderByWithAggregationInput[]
    by: DealershipScalarFieldEnum[] | DealershipScalarFieldEnum
    having?: DealershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealershipCountAggregateInputType | true
    _avg?: DealershipAvgAggregateInputType
    _sum?: DealershipSumAggregateInputType
    _min?: DealershipMinAggregateInputType
    _max?: DealershipMaxAggregateInputType
  }

  export type DealershipGroupByOutputType = {
    id: number
    name: string
    password: string
    isDeleted: boolean
    _count: DealershipCountAggregateOutputType | null
    _avg: DealershipAvgAggregateOutputType | null
    _sum: DealershipSumAggregateOutputType | null
    _min: DealershipMinAggregateOutputType | null
    _max: DealershipMaxAggregateOutputType | null
  }

  type GetDealershipGroupByPayload<T extends DealershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealershipGroupByOutputType[P]>
            : GetScalarType<T[P], DealershipGroupByOutputType[P]>
        }
      >
    >


  export type DealershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    isDeleted?: boolean
    Customer?: boolean | Dealership$CustomerArgs<ExtArgs>
    ProductCompany?: boolean | Dealership$ProductCompanyArgs<ExtArgs>
    _count?: boolean | DealershipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealership"]>

  export type DealershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["dealership"]>

  export type DealershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["dealership"]>

  export type DealershipSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    isDeleted?: boolean
  }

  export type DealershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "isDeleted", ExtArgs["result"]["dealership"]>
  export type DealershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | Dealership$CustomerArgs<ExtArgs>
    ProductCompany?: boolean | Dealership$ProductCompanyArgs<ExtArgs>
    _count?: boolean | DealershipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DealershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DealershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dealership"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>[]
      ProductCompany: Prisma.$ProductCompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      isDeleted: boolean
    }, ExtArgs["result"]["dealership"]>
    composites: {}
  }

  type DealershipGetPayload<S extends boolean | null | undefined | DealershipDefaultArgs> = $Result.GetResult<Prisma.$DealershipPayload, S>

  type DealershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealershipCountAggregateInputType | true
    }

  export interface DealershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dealership'], meta: { name: 'Dealership' } }
    /**
     * Find zero or one Dealership that matches the filter.
     * @param {DealershipFindUniqueArgs} args - Arguments to find a Dealership
     * @example
     * // Get one Dealership
     * const dealership = await prisma.dealership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealershipFindUniqueArgs>(args: SelectSubset<T, DealershipFindUniqueArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dealership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealershipFindUniqueOrThrowArgs} args - Arguments to find a Dealership
     * @example
     * // Get one Dealership
     * const dealership = await prisma.dealership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealershipFindUniqueOrThrowArgs>(args: SelectSubset<T, DealershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipFindFirstArgs} args - Arguments to find a Dealership
     * @example
     * // Get one Dealership
     * const dealership = await prisma.dealership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealershipFindFirstArgs>(args?: SelectSubset<T, DealershipFindFirstArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dealership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipFindFirstOrThrowArgs} args - Arguments to find a Dealership
     * @example
     * // Get one Dealership
     * const dealership = await prisma.dealership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealershipFindFirstOrThrowArgs>(args?: SelectSubset<T, DealershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dealerships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dealerships
     * const dealerships = await prisma.dealership.findMany()
     * 
     * // Get first 10 Dealerships
     * const dealerships = await prisma.dealership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealershipWithIdOnly = await prisma.dealership.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealershipFindManyArgs>(args?: SelectSubset<T, DealershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dealership.
     * @param {DealershipCreateArgs} args - Arguments to create a Dealership.
     * @example
     * // Create one Dealership
     * const Dealership = await prisma.dealership.create({
     *   data: {
     *     // ... data to create a Dealership
     *   }
     * })
     * 
     */
    create<T extends DealershipCreateArgs>(args: SelectSubset<T, DealershipCreateArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dealerships.
     * @param {DealershipCreateManyArgs} args - Arguments to create many Dealerships.
     * @example
     * // Create many Dealerships
     * const dealership = await prisma.dealership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealershipCreateManyArgs>(args?: SelectSubset<T, DealershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dealerships and returns the data saved in the database.
     * @param {DealershipCreateManyAndReturnArgs} args - Arguments to create many Dealerships.
     * @example
     * // Create many Dealerships
     * const dealership = await prisma.dealership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dealerships and only return the `id`
     * const dealershipWithIdOnly = await prisma.dealership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealershipCreateManyAndReturnArgs>(args?: SelectSubset<T, DealershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dealership.
     * @param {DealershipDeleteArgs} args - Arguments to delete one Dealership.
     * @example
     * // Delete one Dealership
     * const Dealership = await prisma.dealership.delete({
     *   where: {
     *     // ... filter to delete one Dealership
     *   }
     * })
     * 
     */
    delete<T extends DealershipDeleteArgs>(args: SelectSubset<T, DealershipDeleteArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dealership.
     * @param {DealershipUpdateArgs} args - Arguments to update one Dealership.
     * @example
     * // Update one Dealership
     * const dealership = await prisma.dealership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealershipUpdateArgs>(args: SelectSubset<T, DealershipUpdateArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dealerships.
     * @param {DealershipDeleteManyArgs} args - Arguments to filter Dealerships to delete.
     * @example
     * // Delete a few Dealerships
     * const { count } = await prisma.dealership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealershipDeleteManyArgs>(args?: SelectSubset<T, DealershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dealerships
     * const dealership = await prisma.dealership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealershipUpdateManyArgs>(args: SelectSubset<T, DealershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dealerships and returns the data updated in the database.
     * @param {DealershipUpdateManyAndReturnArgs} args - Arguments to update many Dealerships.
     * @example
     * // Update many Dealerships
     * const dealership = await prisma.dealership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dealerships and only return the `id`
     * const dealershipWithIdOnly = await prisma.dealership.updateManyAndReturn({
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
    updateManyAndReturn<T extends DealershipUpdateManyAndReturnArgs>(args: SelectSubset<T, DealershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dealership.
     * @param {DealershipUpsertArgs} args - Arguments to update or create a Dealership.
     * @example
     * // Update or create a Dealership
     * const dealership = await prisma.dealership.upsert({
     *   create: {
     *     // ... data to create a Dealership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dealership we want to update
     *   }
     * })
     */
    upsert<T extends DealershipUpsertArgs>(args: SelectSubset<T, DealershipUpsertArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dealerships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipCountArgs} args - Arguments to filter Dealerships to count.
     * @example
     * // Count the number of Dealerships
     * const count = await prisma.dealership.count({
     *   where: {
     *     // ... the filter for the Dealerships we want to count
     *   }
     * })
    **/
    count<T extends DealershipCountArgs>(
      args?: Subset<T, DealershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dealership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DealershipAggregateArgs>(args: Subset<T, DealershipAggregateArgs>): Prisma.PrismaPromise<GetDealershipAggregateType<T>>

    /**
     * Group by Dealership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipGroupByArgs} args - Group by arguments.
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
      T extends DealershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealershipGroupByArgs['orderBy'] }
        : { orderBy?: DealershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DealershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dealership model
   */
  readonly fields: DealershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dealership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends Dealership$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, Dealership$CustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProductCompany<T extends Dealership$ProductCompanyArgs<ExtArgs> = {}>(args?: Subset<T, Dealership$ProductCompanyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dealership model
   */
  interface DealershipFieldRefs {
    readonly id: FieldRef<"Dealership", 'Int'>
    readonly name: FieldRef<"Dealership", 'String'>
    readonly password: FieldRef<"Dealership", 'String'>
    readonly isDeleted: FieldRef<"Dealership", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Dealership findUnique
   */
  export type DealershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter, which Dealership to fetch.
     */
    where: DealershipWhereUniqueInput
  }

  /**
   * Dealership findUniqueOrThrow
   */
  export type DealershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter, which Dealership to fetch.
     */
    where: DealershipWhereUniqueInput
  }

  /**
   * Dealership findFirst
   */
  export type DealershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter, which Dealership to fetch.
     */
    where?: DealershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealerships to fetch.
     */
    orderBy?: DealershipOrderByWithRelationInput | DealershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealerships.
     */
    cursor?: DealershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealerships.
     */
    distinct?: DealershipScalarFieldEnum | DealershipScalarFieldEnum[]
  }

  /**
   * Dealership findFirstOrThrow
   */
  export type DealershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter, which Dealership to fetch.
     */
    where?: DealershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealerships to fetch.
     */
    orderBy?: DealershipOrderByWithRelationInput | DealershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dealerships.
     */
    cursor?: DealershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealerships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dealerships.
     */
    distinct?: DealershipScalarFieldEnum | DealershipScalarFieldEnum[]
  }

  /**
   * Dealership findMany
   */
  export type DealershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter, which Dealerships to fetch.
     */
    where?: DealershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dealerships to fetch.
     */
    orderBy?: DealershipOrderByWithRelationInput | DealershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dealerships.
     */
    cursor?: DealershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dealerships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dealerships.
     */
    skip?: number
    distinct?: DealershipScalarFieldEnum | DealershipScalarFieldEnum[]
  }

  /**
   * Dealership create
   */
  export type DealershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Dealership.
     */
    data: XOR<DealershipCreateInput, DealershipUncheckedCreateInput>
  }

  /**
   * Dealership createMany
   */
  export type DealershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dealerships.
     */
    data: DealershipCreateManyInput | DealershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealership createManyAndReturn
   */
  export type DealershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * The data used to create many Dealerships.
     */
    data: DealershipCreateManyInput | DealershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dealership update
   */
  export type DealershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Dealership.
     */
    data: XOR<DealershipUpdateInput, DealershipUncheckedUpdateInput>
    /**
     * Choose, which Dealership to update.
     */
    where: DealershipWhereUniqueInput
  }

  /**
   * Dealership updateMany
   */
  export type DealershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dealerships.
     */
    data: XOR<DealershipUpdateManyMutationInput, DealershipUncheckedUpdateManyInput>
    /**
     * Filter which Dealerships to update
     */
    where?: DealershipWhereInput
    /**
     * Limit how many Dealerships to update.
     */
    limit?: number
  }

  /**
   * Dealership updateManyAndReturn
   */
  export type DealershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * The data used to update Dealerships.
     */
    data: XOR<DealershipUpdateManyMutationInput, DealershipUncheckedUpdateManyInput>
    /**
     * Filter which Dealerships to update
     */
    where?: DealershipWhereInput
    /**
     * Limit how many Dealerships to update.
     */
    limit?: number
  }

  /**
   * Dealership upsert
   */
  export type DealershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Dealership to update in case it exists.
     */
    where: DealershipWhereUniqueInput
    /**
     * In case the Dealership found by the `where` argument doesn't exist, create a new Dealership with this data.
     */
    create: XOR<DealershipCreateInput, DealershipUncheckedCreateInput>
    /**
     * In case the Dealership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealershipUpdateInput, DealershipUncheckedUpdateInput>
  }

  /**
   * Dealership delete
   */
  export type DealershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
    /**
     * Filter which Dealership to delete.
     */
    where: DealershipWhereUniqueInput
  }

  /**
   * Dealership deleteMany
   */
  export type DealershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dealerships to delete
     */
    where?: DealershipWhereInput
    /**
     * Limit how many Dealerships to delete.
     */
    limit?: number
  }

  /**
   * Dealership.Customer
   */
  export type Dealership$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Dealership.ProductCompany
   */
  export type Dealership$ProductCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    where?: ProductCompanyWhereInput
    orderBy?: ProductCompanyOrderByWithRelationInput | ProductCompanyOrderByWithRelationInput[]
    cursor?: ProductCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCompanyScalarFieldEnum | ProductCompanyScalarFieldEnum[]
  }

  /**
   * Dealership without action
   */
  export type DealershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dealership
     */
    select?: DealershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dealership
     */
    omit?: DealershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    dealershipId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    dealershipId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    street1: string | null
    street2: string | null
    state: string | null
    city: string | null
    zip: string | null
    phone: string | null
    email: string | null
    isDeleted: boolean | null
    dealershipId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    street1: string | null
    street2: string | null
    state: string | null
    city: string | null
    zip: string | null
    phone: string | null
    email: string | null
    isDeleted: boolean | null
    dealershipId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    street1: number
    street2: number
    state: number
    city: number
    zip: number
    phone: number
    email: number
    isDeleted: number
    dealershipId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    dealershipId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    dealershipId?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    state?: true
    city?: true
    zip?: true
    phone?: true
    email?: true
    isDeleted?: true
    dealershipId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    state?: true
    city?: true
    zip?: true
    phone?: true
    email?: true
    isDeleted?: true
    dealershipId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    street1?: true
    street2?: true
    state?: true
    city?: true
    zip?: true
    phone?: true
    email?: true
    isDeleted?: true
    dealershipId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    street1: string | null
    street2: string | null
    state: string | null
    city: string | null
    zip: string | null
    phone: string | null
    email: string | null
    isDeleted: boolean
    dealershipId: number
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    isDeleted?: boolean
    dealershipId?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
    PurchaseOrder?: boolean | Customer$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    isDeleted?: boolean
    dealershipId?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    isDeleted?: boolean
    dealershipId?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    street1?: boolean
    street2?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    phone?: boolean
    email?: boolean
    isDeleted?: boolean
    dealershipId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "street1" | "street2" | "state" | "city" | "zip" | "phone" | "email" | "isDeleted" | "dealershipId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
    PurchaseOrder?: boolean | Customer$PurchaseOrderArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Dealership: Prisma.$DealershipPayload<ExtArgs>
      PurchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      street1: string | null
      street2: string | null
      state: string | null
      city: string | null
      zip: string | null
      phone: string | null
      email: string | null
      isDeleted: boolean
      dealershipId: number
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dealership<T extends DealershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealershipDefaultArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PurchaseOrder<T extends Customer$PurchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, Customer$PurchaseOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly street1: FieldRef<"Customer", 'String'>
    readonly street2: FieldRef<"Customer", 'String'>
    readonly state: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly zip: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly isDeleted: FieldRef<"Customer", 'Boolean'>
    readonly dealershipId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.PurchaseOrder
   */
  export type Customer$PurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model ProductCompany
   */

  export type AggregateProductCompany = {
    _count: ProductCompanyCountAggregateOutputType | null
    _avg: ProductCompanyAvgAggregateOutputType | null
    _sum: ProductCompanySumAggregateOutputType | null
    _min: ProductCompanyMinAggregateOutputType | null
    _max: ProductCompanyMaxAggregateOutputType | null
  }

  export type ProductCompanyAvgAggregateOutputType = {
    id: number | null
    dealershipId: number | null
  }

  export type ProductCompanySumAggregateOutputType = {
    id: number | null
    dealershipId: number | null
  }

  export type ProductCompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
    companyType: $Enums.CompanyType | null
    dealershipId: number | null
    isDeleted: boolean | null
  }

  export type ProductCompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    companyType: $Enums.CompanyType | null
    dealershipId: number | null
    isDeleted: boolean | null
  }

  export type ProductCompanyCountAggregateOutputType = {
    id: number
    name: number
    companyType: number
    dealershipId: number
    isDeleted: number
    _all: number
  }


  export type ProductCompanyAvgAggregateInputType = {
    id?: true
    dealershipId?: true
  }

  export type ProductCompanySumAggregateInputType = {
    id?: true
    dealershipId?: true
  }

  export type ProductCompanyMinAggregateInputType = {
    id?: true
    name?: true
    companyType?: true
    dealershipId?: true
    isDeleted?: true
  }

  export type ProductCompanyMaxAggregateInputType = {
    id?: true
    name?: true
    companyType?: true
    dealershipId?: true
    isDeleted?: true
  }

  export type ProductCompanyCountAggregateInputType = {
    id?: true
    name?: true
    companyType?: true
    dealershipId?: true
    isDeleted?: true
    _all?: true
  }

  export type ProductCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCompany to aggregate.
     */
    where?: ProductCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCompanies to fetch.
     */
    orderBy?: ProductCompanyOrderByWithRelationInput | ProductCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCompanies
    **/
    _count?: true | ProductCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCompanyMaxAggregateInputType
  }

  export type GetProductCompanyAggregateType<T extends ProductCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCompany[P]>
      : GetScalarType<T[P], AggregateProductCompany[P]>
  }




  export type ProductCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCompanyWhereInput
    orderBy?: ProductCompanyOrderByWithAggregationInput | ProductCompanyOrderByWithAggregationInput[]
    by: ProductCompanyScalarFieldEnum[] | ProductCompanyScalarFieldEnum
    having?: ProductCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCompanyCountAggregateInputType | true
    _avg?: ProductCompanyAvgAggregateInputType
    _sum?: ProductCompanySumAggregateInputType
    _min?: ProductCompanyMinAggregateInputType
    _max?: ProductCompanyMaxAggregateInputType
  }

  export type ProductCompanyGroupByOutputType = {
    id: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted: boolean
    _count: ProductCompanyCountAggregateOutputType | null
    _avg: ProductCompanyAvgAggregateOutputType | null
    _sum: ProductCompanySumAggregateOutputType | null
    _min: ProductCompanyMinAggregateOutputType | null
    _max: ProductCompanyMaxAggregateOutputType | null
  }

  type GetProductCompanyGroupByPayload<T extends ProductCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCompanyGroupByOutputType[P]>
        }
      >
    >


  export type ProductCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyType?: boolean
    dealershipId?: boolean
    isDeleted?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
    SeedProduct?: boolean | ProductCompany$SeedProductArgs<ExtArgs>
    BayerProduct?: boolean | ProductCompany$BayerProductArgs<ExtArgs>
    RegularProduct?: boolean | ProductCompany$RegularProductArgs<ExtArgs>
    _count?: boolean | ProductCompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCompany"]>

  export type ProductCompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyType?: boolean
    dealershipId?: boolean
    isDeleted?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCompany"]>

  export type ProductCompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyType?: boolean
    dealershipId?: boolean
    isDeleted?: boolean
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productCompany"]>

  export type ProductCompanySelectScalar = {
    id?: boolean
    name?: boolean
    companyType?: boolean
    dealershipId?: boolean
    isDeleted?: boolean
  }

  export type ProductCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyType" | "dealershipId" | "isDeleted", ExtArgs["result"]["productCompany"]>
  export type ProductCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
    SeedProduct?: boolean | ProductCompany$SeedProductArgs<ExtArgs>
    BayerProduct?: boolean | ProductCompany$BayerProductArgs<ExtArgs>
    RegularProduct?: boolean | ProductCompany$RegularProductArgs<ExtArgs>
    _count?: boolean | ProductCompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductCompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }
  export type ProductCompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dealership?: boolean | DealershipDefaultArgs<ExtArgs>
  }

  export type $ProductCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCompany"
    objects: {
      Dealership: Prisma.$DealershipPayload<ExtArgs>
      SeedProduct: Prisma.$SeedProductPayload<ExtArgs>[]
      BayerProduct: Prisma.$BayerProductPayload<ExtArgs>[]
      RegularProduct: Prisma.$RegularProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      companyType: $Enums.CompanyType
      dealershipId: number
      isDeleted: boolean
    }, ExtArgs["result"]["productCompany"]>
    composites: {}
  }

  type ProductCompanyGetPayload<S extends boolean | null | undefined | ProductCompanyDefaultArgs> = $Result.GetResult<Prisma.$ProductCompanyPayload, S>

  type ProductCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCompanyCountAggregateInputType | true
    }

  export interface ProductCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCompany'], meta: { name: 'ProductCompany' } }
    /**
     * Find zero or one ProductCompany that matches the filter.
     * @param {ProductCompanyFindUniqueArgs} args - Arguments to find a ProductCompany
     * @example
     * // Get one ProductCompany
     * const productCompany = await prisma.productCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCompanyFindUniqueArgs>(args: SelectSubset<T, ProductCompanyFindUniqueArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCompanyFindUniqueOrThrowArgs} args - Arguments to find a ProductCompany
     * @example
     * // Get one ProductCompany
     * const productCompany = await prisma.productCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyFindFirstArgs} args - Arguments to find a ProductCompany
     * @example
     * // Get one ProductCompany
     * const productCompany = await prisma.productCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCompanyFindFirstArgs>(args?: SelectSubset<T, ProductCompanyFindFirstArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyFindFirstOrThrowArgs} args - Arguments to find a ProductCompany
     * @example
     * // Get one ProductCompany
     * const productCompany = await prisma.productCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCompanies
     * const productCompanies = await prisma.productCompany.findMany()
     * 
     * // Get first 10 ProductCompanies
     * const productCompanies = await prisma.productCompany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCompanyWithIdOnly = await prisma.productCompany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCompanyFindManyArgs>(args?: SelectSubset<T, ProductCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCompany.
     * @param {ProductCompanyCreateArgs} args - Arguments to create a ProductCompany.
     * @example
     * // Create one ProductCompany
     * const ProductCompany = await prisma.productCompany.create({
     *   data: {
     *     // ... data to create a ProductCompany
     *   }
     * })
     * 
     */
    create<T extends ProductCompanyCreateArgs>(args: SelectSubset<T, ProductCompanyCreateArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCompanies.
     * @param {ProductCompanyCreateManyArgs} args - Arguments to create many ProductCompanies.
     * @example
     * // Create many ProductCompanies
     * const productCompany = await prisma.productCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCompanyCreateManyArgs>(args?: SelectSubset<T, ProductCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCompanies and returns the data saved in the database.
     * @param {ProductCompanyCreateManyAndReturnArgs} args - Arguments to create many ProductCompanies.
     * @example
     * // Create many ProductCompanies
     * const productCompany = await prisma.productCompany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCompanies and only return the `id`
     * const productCompanyWithIdOnly = await prisma.productCompany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCompany.
     * @param {ProductCompanyDeleteArgs} args - Arguments to delete one ProductCompany.
     * @example
     * // Delete one ProductCompany
     * const ProductCompany = await prisma.productCompany.delete({
     *   where: {
     *     // ... filter to delete one ProductCompany
     *   }
     * })
     * 
     */
    delete<T extends ProductCompanyDeleteArgs>(args: SelectSubset<T, ProductCompanyDeleteArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCompany.
     * @param {ProductCompanyUpdateArgs} args - Arguments to update one ProductCompany.
     * @example
     * // Update one ProductCompany
     * const productCompany = await prisma.productCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCompanyUpdateArgs>(args: SelectSubset<T, ProductCompanyUpdateArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCompanies.
     * @param {ProductCompanyDeleteManyArgs} args - Arguments to filter ProductCompanies to delete.
     * @example
     * // Delete a few ProductCompanies
     * const { count } = await prisma.productCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCompanyDeleteManyArgs>(args?: SelectSubset<T, ProductCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCompanies
     * const productCompany = await prisma.productCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCompanyUpdateManyArgs>(args: SelectSubset<T, ProductCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCompanies and returns the data updated in the database.
     * @param {ProductCompanyUpdateManyAndReturnArgs} args - Arguments to update many ProductCompanies.
     * @example
     * // Update many ProductCompanies
     * const productCompany = await prisma.productCompany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCompanies and only return the `id`
     * const productCompanyWithIdOnly = await prisma.productCompany.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductCompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCompany.
     * @param {ProductCompanyUpsertArgs} args - Arguments to update or create a ProductCompany.
     * @example
     * // Update or create a ProductCompany
     * const productCompany = await prisma.productCompany.upsert({
     *   create: {
     *     // ... data to create a ProductCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCompany we want to update
     *   }
     * })
     */
    upsert<T extends ProductCompanyUpsertArgs>(args: SelectSubset<T, ProductCompanyUpsertArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyCountArgs} args - Arguments to filter ProductCompanies to count.
     * @example
     * // Count the number of ProductCompanies
     * const count = await prisma.productCompany.count({
     *   where: {
     *     // ... the filter for the ProductCompanies we want to count
     *   }
     * })
    **/
    count<T extends ProductCompanyCountArgs>(
      args?: Subset<T, ProductCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductCompanyAggregateArgs>(args: Subset<T, ProductCompanyAggregateArgs>): Prisma.PrismaPromise<GetProductCompanyAggregateType<T>>

    /**
     * Group by ProductCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCompanyGroupByArgs} args - Group by arguments.
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
      T extends ProductCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCompanyGroupByArgs['orderBy'] }
        : { orderBy?: ProductCompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCompany model
   */
  readonly fields: ProductCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dealership<T extends DealershipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealershipDefaultArgs<ExtArgs>>): Prisma__DealershipClient<$Result.GetResult<Prisma.$DealershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SeedProduct<T extends ProductCompany$SeedProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompany$SeedProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BayerProduct<T extends ProductCompany$BayerProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompany$BayerProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RegularProduct<T extends ProductCompany$RegularProductArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompany$RegularProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductCompany model
   */
  interface ProductCompanyFieldRefs {
    readonly id: FieldRef<"ProductCompany", 'Int'>
    readonly name: FieldRef<"ProductCompany", 'String'>
    readonly companyType: FieldRef<"ProductCompany", 'CompanyType'>
    readonly dealershipId: FieldRef<"ProductCompany", 'Int'>
    readonly isDeleted: FieldRef<"ProductCompany", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductCompany findUnique
   */
  export type ProductCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter, which ProductCompany to fetch.
     */
    where: ProductCompanyWhereUniqueInput
  }

  /**
   * ProductCompany findUniqueOrThrow
   */
  export type ProductCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter, which ProductCompany to fetch.
     */
    where: ProductCompanyWhereUniqueInput
  }

  /**
   * ProductCompany findFirst
   */
  export type ProductCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter, which ProductCompany to fetch.
     */
    where?: ProductCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCompanies to fetch.
     */
    orderBy?: ProductCompanyOrderByWithRelationInput | ProductCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCompanies.
     */
    cursor?: ProductCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCompanies.
     */
    distinct?: ProductCompanyScalarFieldEnum | ProductCompanyScalarFieldEnum[]
  }

  /**
   * ProductCompany findFirstOrThrow
   */
  export type ProductCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter, which ProductCompany to fetch.
     */
    where?: ProductCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCompanies to fetch.
     */
    orderBy?: ProductCompanyOrderByWithRelationInput | ProductCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCompanies.
     */
    cursor?: ProductCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCompanies.
     */
    distinct?: ProductCompanyScalarFieldEnum | ProductCompanyScalarFieldEnum[]
  }

  /**
   * ProductCompany findMany
   */
  export type ProductCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter, which ProductCompanies to fetch.
     */
    where?: ProductCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCompanies to fetch.
     */
    orderBy?: ProductCompanyOrderByWithRelationInput | ProductCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCompanies.
     */
    cursor?: ProductCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCompanies.
     */
    skip?: number
    distinct?: ProductCompanyScalarFieldEnum | ProductCompanyScalarFieldEnum[]
  }

  /**
   * ProductCompany create
   */
  export type ProductCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCompany.
     */
    data: XOR<ProductCompanyCreateInput, ProductCompanyUncheckedCreateInput>
  }

  /**
   * ProductCompany createMany
   */
  export type ProductCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCompanies.
     */
    data: ProductCompanyCreateManyInput | ProductCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCompany createManyAndReturn
   */
  export type ProductCompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCompanies.
     */
    data: ProductCompanyCreateManyInput | ProductCompanyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCompany update
   */
  export type ProductCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCompany.
     */
    data: XOR<ProductCompanyUpdateInput, ProductCompanyUncheckedUpdateInput>
    /**
     * Choose, which ProductCompany to update.
     */
    where: ProductCompanyWhereUniqueInput
  }

  /**
   * ProductCompany updateMany
   */
  export type ProductCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCompanies.
     */
    data: XOR<ProductCompanyUpdateManyMutationInput, ProductCompanyUncheckedUpdateManyInput>
    /**
     * Filter which ProductCompanies to update
     */
    where?: ProductCompanyWhereInput
    /**
     * Limit how many ProductCompanies to update.
     */
    limit?: number
  }

  /**
   * ProductCompany updateManyAndReturn
   */
  export type ProductCompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * The data used to update ProductCompanies.
     */
    data: XOR<ProductCompanyUpdateManyMutationInput, ProductCompanyUncheckedUpdateManyInput>
    /**
     * Filter which ProductCompanies to update
     */
    where?: ProductCompanyWhereInput
    /**
     * Limit how many ProductCompanies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCompany upsert
   */
  export type ProductCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCompany to update in case it exists.
     */
    where: ProductCompanyWhereUniqueInput
    /**
     * In case the ProductCompany found by the `where` argument doesn't exist, create a new ProductCompany with this data.
     */
    create: XOR<ProductCompanyCreateInput, ProductCompanyUncheckedCreateInput>
    /**
     * In case the ProductCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCompanyUpdateInput, ProductCompanyUncheckedUpdateInput>
  }

  /**
   * ProductCompany delete
   */
  export type ProductCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
    /**
     * Filter which ProductCompany to delete.
     */
    where: ProductCompanyWhereUniqueInput
  }

  /**
   * ProductCompany deleteMany
   */
  export type ProductCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCompanies to delete
     */
    where?: ProductCompanyWhereInput
    /**
     * Limit how many ProductCompanies to delete.
     */
    limit?: number
  }

  /**
   * ProductCompany.SeedProduct
   */
  export type ProductCompany$SeedProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    where?: SeedProductWhereInput
    orderBy?: SeedProductOrderByWithRelationInput | SeedProductOrderByWithRelationInput[]
    cursor?: SeedProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeedProductScalarFieldEnum | SeedProductScalarFieldEnum[]
  }

  /**
   * ProductCompany.BayerProduct
   */
  export type ProductCompany$BayerProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    where?: BayerProductWhereInput
    orderBy?: BayerProductOrderByWithRelationInput | BayerProductOrderByWithRelationInput[]
    cursor?: BayerProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BayerProductScalarFieldEnum | BayerProductScalarFieldEnum[]
  }

  /**
   * ProductCompany.RegularProduct
   */
  export type ProductCompany$RegularProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    where?: RegularProductWhereInput
    orderBy?: RegularProductOrderByWithRelationInput | RegularProductOrderByWithRelationInput[]
    cursor?: RegularProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegularProductScalarFieldEnum | RegularProductScalarFieldEnum[]
  }

  /**
   * ProductCompany without action
   */
  export type ProductCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCompany
     */
    select?: ProductCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCompany
     */
    omit?: ProductCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCompanyInclude<ExtArgs> | null
  }


  /**
   * Model BayerProduct
   */

  export type AggregateBayerProduct = {
    _count: BayerProductCountAggregateOutputType | null
    _avg: BayerProductAvgAggregateOutputType | null
    _sum: BayerProductSumAggregateOutputType | null
    _min: BayerProductMinAggregateOutputType | null
    _max: BayerProductMaxAggregateOutputType | null
  }

  export type BayerProductAvgAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type BayerProductSumAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type BayerProductMinAggregateOutputType = {
    id: number | null
    trait: string | null
    variety: string | null
    treatment: string | null
    seedSize: string | null
    packaging: string | null
    cropType: $Enums.CropType | null
    productDetail: string | null
    dealerPricing: number | null
    endUserPricing: number | null
    agiisId: string | null
    sapId: string | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type BayerProductMaxAggregateOutputType = {
    id: number | null
    trait: string | null
    variety: string | null
    treatment: string | null
    seedSize: string | null
    packaging: string | null
    cropType: $Enums.CropType | null
    productDetail: string | null
    dealerPricing: number | null
    endUserPricing: number | null
    agiisId: string | null
    sapId: string | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type BayerProductCountAggregateOutputType = {
    id: number
    trait: number
    variety: number
    treatment: number
    seedSize: number
    packaging: number
    cropType: number
    productDetail: number
    dealerPricing: number
    endUserPricing: number
    agiisId: number
    sapId: number
    isDeleted: number
    productCompanyId: number
    _all: number
  }


  export type BayerProductAvgAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type BayerProductSumAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type BayerProductMinAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    productDetail?: true
    dealerPricing?: true
    endUserPricing?: true
    agiisId?: true
    sapId?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type BayerProductMaxAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    productDetail?: true
    dealerPricing?: true
    endUserPricing?: true
    agiisId?: true
    sapId?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type BayerProductCountAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    productDetail?: true
    dealerPricing?: true
    endUserPricing?: true
    agiisId?: true
    sapId?: true
    isDeleted?: true
    productCompanyId?: true
    _all?: true
  }

  export type BayerProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BayerProduct to aggregate.
     */
    where?: BayerProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayerProducts to fetch.
     */
    orderBy?: BayerProductOrderByWithRelationInput | BayerProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BayerProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayerProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayerProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BayerProducts
    **/
    _count?: true | BayerProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BayerProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BayerProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BayerProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BayerProductMaxAggregateInputType
  }

  export type GetBayerProductAggregateType<T extends BayerProductAggregateArgs> = {
        [P in keyof T & keyof AggregateBayerProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBayerProduct[P]>
      : GetScalarType<T[P], AggregateBayerProduct[P]>
  }




  export type BayerProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BayerProductWhereInput
    orderBy?: BayerProductOrderByWithAggregationInput | BayerProductOrderByWithAggregationInput[]
    by: BayerProductScalarFieldEnum[] | BayerProductScalarFieldEnum
    having?: BayerProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BayerProductCountAggregateInputType | true
    _avg?: BayerProductAvgAggregateInputType
    _sum?: BayerProductSumAggregateInputType
    _min?: BayerProductMinAggregateInputType
    _max?: BayerProductMaxAggregateInputType
  }

  export type BayerProductGroupByOutputType = {
    id: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted: boolean
    productCompanyId: number
    _count: BayerProductCountAggregateOutputType | null
    _avg: BayerProductAvgAggregateOutputType | null
    _sum: BayerProductSumAggregateOutputType | null
    _min: BayerProductMinAggregateOutputType | null
    _max: BayerProductMaxAggregateOutputType | null
  }

  type GetBayerProductGroupByPayload<T extends BayerProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BayerProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BayerProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BayerProductGroupByOutputType[P]>
            : GetScalarType<T[P], BayerProductGroupByOutputType[P]>
        }
      >
    >


  export type BayerProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    productDetail?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    agiisId?: boolean
    sapId?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bayerProduct"]>

  export type BayerProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    productDetail?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    agiisId?: boolean
    sapId?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bayerProduct"]>

  export type BayerProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    productDetail?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    agiisId?: boolean
    sapId?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bayerProduct"]>

  export type BayerProductSelectScalar = {
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    productDetail?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    agiisId?: boolean
    sapId?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
  }

  export type BayerProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trait" | "variety" | "treatment" | "seedSize" | "packaging" | "cropType" | "productDetail" | "dealerPricing" | "endUserPricing" | "agiisId" | "sapId" | "isDeleted" | "productCompanyId", ExtArgs["result"]["bayerProduct"]>
  export type BayerProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type BayerProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type BayerProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }

  export type $BayerProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BayerProduct"
    objects: {
      ProductCompany: Prisma.$ProductCompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trait: string
      variety: string
      treatment: string
      seedSize: string
      packaging: string
      cropType: $Enums.CropType
      productDetail: string
      dealerPricing: number
      endUserPricing: number
      agiisId: string
      sapId: string
      isDeleted: boolean
      productCompanyId: number
    }, ExtArgs["result"]["bayerProduct"]>
    composites: {}
  }

  type BayerProductGetPayload<S extends boolean | null | undefined | BayerProductDefaultArgs> = $Result.GetResult<Prisma.$BayerProductPayload, S>

  type BayerProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BayerProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BayerProductCountAggregateInputType | true
    }

  export interface BayerProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BayerProduct'], meta: { name: 'BayerProduct' } }
    /**
     * Find zero or one BayerProduct that matches the filter.
     * @param {BayerProductFindUniqueArgs} args - Arguments to find a BayerProduct
     * @example
     * // Get one BayerProduct
     * const bayerProduct = await prisma.bayerProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BayerProductFindUniqueArgs>(args: SelectSubset<T, BayerProductFindUniqueArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BayerProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BayerProductFindUniqueOrThrowArgs} args - Arguments to find a BayerProduct
     * @example
     * // Get one BayerProduct
     * const bayerProduct = await prisma.bayerProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BayerProductFindUniqueOrThrowArgs>(args: SelectSubset<T, BayerProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BayerProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductFindFirstArgs} args - Arguments to find a BayerProduct
     * @example
     * // Get one BayerProduct
     * const bayerProduct = await prisma.bayerProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BayerProductFindFirstArgs>(args?: SelectSubset<T, BayerProductFindFirstArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BayerProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductFindFirstOrThrowArgs} args - Arguments to find a BayerProduct
     * @example
     * // Get one BayerProduct
     * const bayerProduct = await prisma.bayerProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BayerProductFindFirstOrThrowArgs>(args?: SelectSubset<T, BayerProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BayerProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BayerProducts
     * const bayerProducts = await prisma.bayerProduct.findMany()
     * 
     * // Get first 10 BayerProducts
     * const bayerProducts = await prisma.bayerProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bayerProductWithIdOnly = await prisma.bayerProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BayerProductFindManyArgs>(args?: SelectSubset<T, BayerProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BayerProduct.
     * @param {BayerProductCreateArgs} args - Arguments to create a BayerProduct.
     * @example
     * // Create one BayerProduct
     * const BayerProduct = await prisma.bayerProduct.create({
     *   data: {
     *     // ... data to create a BayerProduct
     *   }
     * })
     * 
     */
    create<T extends BayerProductCreateArgs>(args: SelectSubset<T, BayerProductCreateArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BayerProducts.
     * @param {BayerProductCreateManyArgs} args - Arguments to create many BayerProducts.
     * @example
     * // Create many BayerProducts
     * const bayerProduct = await prisma.bayerProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BayerProductCreateManyArgs>(args?: SelectSubset<T, BayerProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BayerProducts and returns the data saved in the database.
     * @param {BayerProductCreateManyAndReturnArgs} args - Arguments to create many BayerProducts.
     * @example
     * // Create many BayerProducts
     * const bayerProduct = await prisma.bayerProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BayerProducts and only return the `id`
     * const bayerProductWithIdOnly = await prisma.bayerProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BayerProductCreateManyAndReturnArgs>(args?: SelectSubset<T, BayerProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BayerProduct.
     * @param {BayerProductDeleteArgs} args - Arguments to delete one BayerProduct.
     * @example
     * // Delete one BayerProduct
     * const BayerProduct = await prisma.bayerProduct.delete({
     *   where: {
     *     // ... filter to delete one BayerProduct
     *   }
     * })
     * 
     */
    delete<T extends BayerProductDeleteArgs>(args: SelectSubset<T, BayerProductDeleteArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BayerProduct.
     * @param {BayerProductUpdateArgs} args - Arguments to update one BayerProduct.
     * @example
     * // Update one BayerProduct
     * const bayerProduct = await prisma.bayerProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BayerProductUpdateArgs>(args: SelectSubset<T, BayerProductUpdateArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BayerProducts.
     * @param {BayerProductDeleteManyArgs} args - Arguments to filter BayerProducts to delete.
     * @example
     * // Delete a few BayerProducts
     * const { count } = await prisma.bayerProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BayerProductDeleteManyArgs>(args?: SelectSubset<T, BayerProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BayerProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BayerProducts
     * const bayerProduct = await prisma.bayerProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BayerProductUpdateManyArgs>(args: SelectSubset<T, BayerProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BayerProducts and returns the data updated in the database.
     * @param {BayerProductUpdateManyAndReturnArgs} args - Arguments to update many BayerProducts.
     * @example
     * // Update many BayerProducts
     * const bayerProduct = await prisma.bayerProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BayerProducts and only return the `id`
     * const bayerProductWithIdOnly = await prisma.bayerProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends BayerProductUpdateManyAndReturnArgs>(args: SelectSubset<T, BayerProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BayerProduct.
     * @param {BayerProductUpsertArgs} args - Arguments to update or create a BayerProduct.
     * @example
     * // Update or create a BayerProduct
     * const bayerProduct = await prisma.bayerProduct.upsert({
     *   create: {
     *     // ... data to create a BayerProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BayerProduct we want to update
     *   }
     * })
     */
    upsert<T extends BayerProductUpsertArgs>(args: SelectSubset<T, BayerProductUpsertArgs<ExtArgs>>): Prisma__BayerProductClient<$Result.GetResult<Prisma.$BayerProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BayerProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductCountArgs} args - Arguments to filter BayerProducts to count.
     * @example
     * // Count the number of BayerProducts
     * const count = await prisma.bayerProduct.count({
     *   where: {
     *     // ... the filter for the BayerProducts we want to count
     *   }
     * })
    **/
    count<T extends BayerProductCountArgs>(
      args?: Subset<T, BayerProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BayerProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BayerProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BayerProductAggregateArgs>(args: Subset<T, BayerProductAggregateArgs>): Prisma.PrismaPromise<GetBayerProductAggregateType<T>>

    /**
     * Group by BayerProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BayerProductGroupByArgs} args - Group by arguments.
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
      T extends BayerProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BayerProductGroupByArgs['orderBy'] }
        : { orderBy?: BayerProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BayerProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBayerProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BayerProduct model
   */
  readonly fields: BayerProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BayerProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BayerProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCompany<T extends ProductCompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompanyDefaultArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BayerProduct model
   */
  interface BayerProductFieldRefs {
    readonly id: FieldRef<"BayerProduct", 'Int'>
    readonly trait: FieldRef<"BayerProduct", 'String'>
    readonly variety: FieldRef<"BayerProduct", 'String'>
    readonly treatment: FieldRef<"BayerProduct", 'String'>
    readonly seedSize: FieldRef<"BayerProduct", 'String'>
    readonly packaging: FieldRef<"BayerProduct", 'String'>
    readonly cropType: FieldRef<"BayerProduct", 'CropType'>
    readonly productDetail: FieldRef<"BayerProduct", 'String'>
    readonly dealerPricing: FieldRef<"BayerProduct", 'Float'>
    readonly endUserPricing: FieldRef<"BayerProduct", 'Float'>
    readonly agiisId: FieldRef<"BayerProduct", 'String'>
    readonly sapId: FieldRef<"BayerProduct", 'String'>
    readonly isDeleted: FieldRef<"BayerProduct", 'Boolean'>
    readonly productCompanyId: FieldRef<"BayerProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BayerProduct findUnique
   */
  export type BayerProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter, which BayerProduct to fetch.
     */
    where: BayerProductWhereUniqueInput
  }

  /**
   * BayerProduct findUniqueOrThrow
   */
  export type BayerProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter, which BayerProduct to fetch.
     */
    where: BayerProductWhereUniqueInput
  }

  /**
   * BayerProduct findFirst
   */
  export type BayerProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter, which BayerProduct to fetch.
     */
    where?: BayerProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayerProducts to fetch.
     */
    orderBy?: BayerProductOrderByWithRelationInput | BayerProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BayerProducts.
     */
    cursor?: BayerProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayerProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayerProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BayerProducts.
     */
    distinct?: BayerProductScalarFieldEnum | BayerProductScalarFieldEnum[]
  }

  /**
   * BayerProduct findFirstOrThrow
   */
  export type BayerProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter, which BayerProduct to fetch.
     */
    where?: BayerProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayerProducts to fetch.
     */
    orderBy?: BayerProductOrderByWithRelationInput | BayerProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BayerProducts.
     */
    cursor?: BayerProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayerProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayerProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BayerProducts.
     */
    distinct?: BayerProductScalarFieldEnum | BayerProductScalarFieldEnum[]
  }

  /**
   * BayerProduct findMany
   */
  export type BayerProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter, which BayerProducts to fetch.
     */
    where?: BayerProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BayerProducts to fetch.
     */
    orderBy?: BayerProductOrderByWithRelationInput | BayerProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BayerProducts.
     */
    cursor?: BayerProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BayerProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BayerProducts.
     */
    skip?: number
    distinct?: BayerProductScalarFieldEnum | BayerProductScalarFieldEnum[]
  }

  /**
   * BayerProduct create
   */
  export type BayerProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * The data needed to create a BayerProduct.
     */
    data: XOR<BayerProductCreateInput, BayerProductUncheckedCreateInput>
  }

  /**
   * BayerProduct createMany
   */
  export type BayerProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BayerProducts.
     */
    data: BayerProductCreateManyInput | BayerProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BayerProduct createManyAndReturn
   */
  export type BayerProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * The data used to create many BayerProducts.
     */
    data: BayerProductCreateManyInput | BayerProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BayerProduct update
   */
  export type BayerProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * The data needed to update a BayerProduct.
     */
    data: XOR<BayerProductUpdateInput, BayerProductUncheckedUpdateInput>
    /**
     * Choose, which BayerProduct to update.
     */
    where: BayerProductWhereUniqueInput
  }

  /**
   * BayerProduct updateMany
   */
  export type BayerProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BayerProducts.
     */
    data: XOR<BayerProductUpdateManyMutationInput, BayerProductUncheckedUpdateManyInput>
    /**
     * Filter which BayerProducts to update
     */
    where?: BayerProductWhereInput
    /**
     * Limit how many BayerProducts to update.
     */
    limit?: number
  }

  /**
   * BayerProduct updateManyAndReturn
   */
  export type BayerProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * The data used to update BayerProducts.
     */
    data: XOR<BayerProductUpdateManyMutationInput, BayerProductUncheckedUpdateManyInput>
    /**
     * Filter which BayerProducts to update
     */
    where?: BayerProductWhereInput
    /**
     * Limit how many BayerProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BayerProduct upsert
   */
  export type BayerProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * The filter to search for the BayerProduct to update in case it exists.
     */
    where: BayerProductWhereUniqueInput
    /**
     * In case the BayerProduct found by the `where` argument doesn't exist, create a new BayerProduct with this data.
     */
    create: XOR<BayerProductCreateInput, BayerProductUncheckedCreateInput>
    /**
     * In case the BayerProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BayerProductUpdateInput, BayerProductUncheckedUpdateInput>
  }

  /**
   * BayerProduct delete
   */
  export type BayerProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
    /**
     * Filter which BayerProduct to delete.
     */
    where: BayerProductWhereUniqueInput
  }

  /**
   * BayerProduct deleteMany
   */
  export type BayerProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BayerProducts to delete
     */
    where?: BayerProductWhereInput
    /**
     * Limit how many BayerProducts to delete.
     */
    limit?: number
  }

  /**
   * BayerProduct without action
   */
  export type BayerProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BayerProduct
     */
    select?: BayerProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BayerProduct
     */
    omit?: BayerProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BayerProductInclude<ExtArgs> | null
  }


  /**
   * Model SeedProduct
   */

  export type AggregateSeedProduct = {
    _count: SeedProductCountAggregateOutputType | null
    _avg: SeedProductAvgAggregateOutputType | null
    _sum: SeedProductSumAggregateOutputType | null
    _min: SeedProductMinAggregateOutputType | null
    _max: SeedProductMaxAggregateOutputType | null
  }

  export type SeedProductAvgAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type SeedProductSumAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type SeedProductMinAggregateOutputType = {
    id: number | null
    trait: string | null
    variety: string | null
    treatment: string | null
    seedSize: string | null
    packaging: string | null
    cropType: $Enums.CropType | null
    dealerPricing: number | null
    endUserPricing: number | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type SeedProductMaxAggregateOutputType = {
    id: number | null
    trait: string | null
    variety: string | null
    treatment: string | null
    seedSize: string | null
    packaging: string | null
    cropType: $Enums.CropType | null
    dealerPricing: number | null
    endUserPricing: number | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type SeedProductCountAggregateOutputType = {
    id: number
    trait: number
    variety: number
    treatment: number
    seedSize: number
    packaging: number
    cropType: number
    dealerPricing: number
    endUserPricing: number
    isDeleted: number
    productCompanyId: number
    _all: number
  }


  export type SeedProductAvgAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type SeedProductSumAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type SeedProductMinAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type SeedProductMaxAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type SeedProductCountAggregateInputType = {
    id?: true
    trait?: true
    variety?: true
    treatment?: true
    seedSize?: true
    packaging?: true
    cropType?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
    _all?: true
  }

  export type SeedProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedProduct to aggregate.
     */
    where?: SeedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedProducts to fetch.
     */
    orderBy?: SeedProductOrderByWithRelationInput | SeedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeedProducts
    **/
    _count?: true | SeedProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeedProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeedProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeedProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeedProductMaxAggregateInputType
  }

  export type GetSeedProductAggregateType<T extends SeedProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSeedProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeedProduct[P]>
      : GetScalarType<T[P], AggregateSeedProduct[P]>
  }




  export type SeedProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedProductWhereInput
    orderBy?: SeedProductOrderByWithAggregationInput | SeedProductOrderByWithAggregationInput[]
    by: SeedProductScalarFieldEnum[] | SeedProductScalarFieldEnum
    having?: SeedProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeedProductCountAggregateInputType | true
    _avg?: SeedProductAvgAggregateInputType
    _sum?: SeedProductSumAggregateInputType
    _min?: SeedProductMinAggregateInputType
    _max?: SeedProductMaxAggregateInputType
  }

  export type SeedProductGroupByOutputType = {
    id: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted: boolean
    productCompanyId: number
    _count: SeedProductCountAggregateOutputType | null
    _avg: SeedProductAvgAggregateOutputType | null
    _sum: SeedProductSumAggregateOutputType | null
    _min: SeedProductMinAggregateOutputType | null
    _max: SeedProductMaxAggregateOutputType | null
  }

  type GetSeedProductGroupByPayload<T extends SeedProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeedProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeedProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeedProductGroupByOutputType[P]>
            : GetScalarType<T[P], SeedProductGroupByOutputType[P]>
        }
      >
    >


  export type SeedProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedProduct"]>

  export type SeedProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedProduct"]>

  export type SeedProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seedProduct"]>

  export type SeedProductSelectScalar = {
    id?: boolean
    trait?: boolean
    variety?: boolean
    treatment?: boolean
    seedSize?: boolean
    packaging?: boolean
    cropType?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
  }

  export type SeedProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trait" | "variety" | "treatment" | "seedSize" | "packaging" | "cropType" | "dealerPricing" | "endUserPricing" | "isDeleted" | "productCompanyId", ExtArgs["result"]["seedProduct"]>
  export type SeedProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type SeedProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type SeedProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }

  export type $SeedProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeedProduct"
    objects: {
      ProductCompany: Prisma.$ProductCompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trait: string
      variety: string
      treatment: string
      seedSize: string
      packaging: string
      cropType: $Enums.CropType
      dealerPricing: number
      endUserPricing: number
      isDeleted: boolean
      productCompanyId: number
    }, ExtArgs["result"]["seedProduct"]>
    composites: {}
  }

  type SeedProductGetPayload<S extends boolean | null | undefined | SeedProductDefaultArgs> = $Result.GetResult<Prisma.$SeedProductPayload, S>

  type SeedProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeedProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeedProductCountAggregateInputType | true
    }

  export interface SeedProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeedProduct'], meta: { name: 'SeedProduct' } }
    /**
     * Find zero or one SeedProduct that matches the filter.
     * @param {SeedProductFindUniqueArgs} args - Arguments to find a SeedProduct
     * @example
     * // Get one SeedProduct
     * const seedProduct = await prisma.seedProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeedProductFindUniqueArgs>(args: SelectSubset<T, SeedProductFindUniqueArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeedProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeedProductFindUniqueOrThrowArgs} args - Arguments to find a SeedProduct
     * @example
     * // Get one SeedProduct
     * const seedProduct = await prisma.seedProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeedProductFindUniqueOrThrowArgs>(args: SelectSubset<T, SeedProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeedProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductFindFirstArgs} args - Arguments to find a SeedProduct
     * @example
     * // Get one SeedProduct
     * const seedProduct = await prisma.seedProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeedProductFindFirstArgs>(args?: SelectSubset<T, SeedProductFindFirstArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeedProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductFindFirstOrThrowArgs} args - Arguments to find a SeedProduct
     * @example
     * // Get one SeedProduct
     * const seedProduct = await prisma.seedProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeedProductFindFirstOrThrowArgs>(args?: SelectSubset<T, SeedProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeedProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeedProducts
     * const seedProducts = await prisma.seedProduct.findMany()
     * 
     * // Get first 10 SeedProducts
     * const seedProducts = await prisma.seedProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seedProductWithIdOnly = await prisma.seedProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeedProductFindManyArgs>(args?: SelectSubset<T, SeedProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeedProduct.
     * @param {SeedProductCreateArgs} args - Arguments to create a SeedProduct.
     * @example
     * // Create one SeedProduct
     * const SeedProduct = await prisma.seedProduct.create({
     *   data: {
     *     // ... data to create a SeedProduct
     *   }
     * })
     * 
     */
    create<T extends SeedProductCreateArgs>(args: SelectSubset<T, SeedProductCreateArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeedProducts.
     * @param {SeedProductCreateManyArgs} args - Arguments to create many SeedProducts.
     * @example
     * // Create many SeedProducts
     * const seedProduct = await prisma.seedProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeedProductCreateManyArgs>(args?: SelectSubset<T, SeedProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeedProducts and returns the data saved in the database.
     * @param {SeedProductCreateManyAndReturnArgs} args - Arguments to create many SeedProducts.
     * @example
     * // Create many SeedProducts
     * const seedProduct = await prisma.seedProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeedProducts and only return the `id`
     * const seedProductWithIdOnly = await prisma.seedProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeedProductCreateManyAndReturnArgs>(args?: SelectSubset<T, SeedProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeedProduct.
     * @param {SeedProductDeleteArgs} args - Arguments to delete one SeedProduct.
     * @example
     * // Delete one SeedProduct
     * const SeedProduct = await prisma.seedProduct.delete({
     *   where: {
     *     // ... filter to delete one SeedProduct
     *   }
     * })
     * 
     */
    delete<T extends SeedProductDeleteArgs>(args: SelectSubset<T, SeedProductDeleteArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeedProduct.
     * @param {SeedProductUpdateArgs} args - Arguments to update one SeedProduct.
     * @example
     * // Update one SeedProduct
     * const seedProduct = await prisma.seedProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeedProductUpdateArgs>(args: SelectSubset<T, SeedProductUpdateArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeedProducts.
     * @param {SeedProductDeleteManyArgs} args - Arguments to filter SeedProducts to delete.
     * @example
     * // Delete a few SeedProducts
     * const { count } = await prisma.seedProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeedProductDeleteManyArgs>(args?: SelectSubset<T, SeedProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeedProducts
     * const seedProduct = await prisma.seedProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeedProductUpdateManyArgs>(args: SelectSubset<T, SeedProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeedProducts and returns the data updated in the database.
     * @param {SeedProductUpdateManyAndReturnArgs} args - Arguments to update many SeedProducts.
     * @example
     * // Update many SeedProducts
     * const seedProduct = await prisma.seedProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeedProducts and only return the `id`
     * const seedProductWithIdOnly = await prisma.seedProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeedProductUpdateManyAndReturnArgs>(args: SelectSubset<T, SeedProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeedProduct.
     * @param {SeedProductUpsertArgs} args - Arguments to update or create a SeedProduct.
     * @example
     * // Update or create a SeedProduct
     * const seedProduct = await prisma.seedProduct.upsert({
     *   create: {
     *     // ... data to create a SeedProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeedProduct we want to update
     *   }
     * })
     */
    upsert<T extends SeedProductUpsertArgs>(args: SelectSubset<T, SeedProductUpsertArgs<ExtArgs>>): Prisma__SeedProductClient<$Result.GetResult<Prisma.$SeedProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeedProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductCountArgs} args - Arguments to filter SeedProducts to count.
     * @example
     * // Count the number of SeedProducts
     * const count = await prisma.seedProduct.count({
     *   where: {
     *     // ... the filter for the SeedProducts we want to count
     *   }
     * })
    **/
    count<T extends SeedProductCountArgs>(
      args?: Subset<T, SeedProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeedProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeedProductAggregateArgs>(args: Subset<T, SeedProductAggregateArgs>): Prisma.PrismaPromise<GetSeedProductAggregateType<T>>

    /**
     * Group by SeedProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedProductGroupByArgs} args - Group by arguments.
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
      T extends SeedProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeedProductGroupByArgs['orderBy'] }
        : { orderBy?: SeedProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeedProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeedProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeedProduct model
   */
  readonly fields: SeedProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeedProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeedProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCompany<T extends ProductCompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompanyDefaultArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeedProduct model
   */
  interface SeedProductFieldRefs {
    readonly id: FieldRef<"SeedProduct", 'Int'>
    readonly trait: FieldRef<"SeedProduct", 'String'>
    readonly variety: FieldRef<"SeedProduct", 'String'>
    readonly treatment: FieldRef<"SeedProduct", 'String'>
    readonly seedSize: FieldRef<"SeedProduct", 'String'>
    readonly packaging: FieldRef<"SeedProduct", 'String'>
    readonly cropType: FieldRef<"SeedProduct", 'CropType'>
    readonly dealerPricing: FieldRef<"SeedProduct", 'Float'>
    readonly endUserPricing: FieldRef<"SeedProduct", 'Float'>
    readonly isDeleted: FieldRef<"SeedProduct", 'Boolean'>
    readonly productCompanyId: FieldRef<"SeedProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeedProduct findUnique
   */
  export type SeedProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter, which SeedProduct to fetch.
     */
    where: SeedProductWhereUniqueInput
  }

  /**
   * SeedProduct findUniqueOrThrow
   */
  export type SeedProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter, which SeedProduct to fetch.
     */
    where: SeedProductWhereUniqueInput
  }

  /**
   * SeedProduct findFirst
   */
  export type SeedProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter, which SeedProduct to fetch.
     */
    where?: SeedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedProducts to fetch.
     */
    orderBy?: SeedProductOrderByWithRelationInput | SeedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedProducts.
     */
    cursor?: SeedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedProducts.
     */
    distinct?: SeedProductScalarFieldEnum | SeedProductScalarFieldEnum[]
  }

  /**
   * SeedProduct findFirstOrThrow
   */
  export type SeedProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter, which SeedProduct to fetch.
     */
    where?: SeedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedProducts to fetch.
     */
    orderBy?: SeedProductOrderByWithRelationInput | SeedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedProducts.
     */
    cursor?: SeedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedProducts.
     */
    distinct?: SeedProductScalarFieldEnum | SeedProductScalarFieldEnum[]
  }

  /**
   * SeedProduct findMany
   */
  export type SeedProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter, which SeedProducts to fetch.
     */
    where?: SeedProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedProducts to fetch.
     */
    orderBy?: SeedProductOrderByWithRelationInput | SeedProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeedProducts.
     */
    cursor?: SeedProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedProducts.
     */
    skip?: number
    distinct?: SeedProductScalarFieldEnum | SeedProductScalarFieldEnum[]
  }

  /**
   * SeedProduct create
   */
  export type SeedProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * The data needed to create a SeedProduct.
     */
    data: XOR<SeedProductCreateInput, SeedProductUncheckedCreateInput>
  }

  /**
   * SeedProduct createMany
   */
  export type SeedProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeedProducts.
     */
    data: SeedProductCreateManyInput | SeedProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeedProduct createManyAndReturn
   */
  export type SeedProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * The data used to create many SeedProducts.
     */
    data: SeedProductCreateManyInput | SeedProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeedProduct update
   */
  export type SeedProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * The data needed to update a SeedProduct.
     */
    data: XOR<SeedProductUpdateInput, SeedProductUncheckedUpdateInput>
    /**
     * Choose, which SeedProduct to update.
     */
    where: SeedProductWhereUniqueInput
  }

  /**
   * SeedProduct updateMany
   */
  export type SeedProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeedProducts.
     */
    data: XOR<SeedProductUpdateManyMutationInput, SeedProductUncheckedUpdateManyInput>
    /**
     * Filter which SeedProducts to update
     */
    where?: SeedProductWhereInput
    /**
     * Limit how many SeedProducts to update.
     */
    limit?: number
  }

  /**
   * SeedProduct updateManyAndReturn
   */
  export type SeedProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * The data used to update SeedProducts.
     */
    data: XOR<SeedProductUpdateManyMutationInput, SeedProductUncheckedUpdateManyInput>
    /**
     * Filter which SeedProducts to update
     */
    where?: SeedProductWhereInput
    /**
     * Limit how many SeedProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeedProduct upsert
   */
  export type SeedProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * The filter to search for the SeedProduct to update in case it exists.
     */
    where: SeedProductWhereUniqueInput
    /**
     * In case the SeedProduct found by the `where` argument doesn't exist, create a new SeedProduct with this data.
     */
    create: XOR<SeedProductCreateInput, SeedProductUncheckedCreateInput>
    /**
     * In case the SeedProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeedProductUpdateInput, SeedProductUncheckedUpdateInput>
  }

  /**
   * SeedProduct delete
   */
  export type SeedProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
    /**
     * Filter which SeedProduct to delete.
     */
    where: SeedProductWhereUniqueInput
  }

  /**
   * SeedProduct deleteMany
   */
  export type SeedProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedProducts to delete
     */
    where?: SeedProductWhereInput
    /**
     * Limit how many SeedProducts to delete.
     */
    limit?: number
  }

  /**
   * SeedProduct without action
   */
  export type SeedProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedProduct
     */
    select?: SeedProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeedProduct
     */
    omit?: SeedProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeedProductInclude<ExtArgs> | null
  }


  /**
   * Model RegularProduct
   */

  export type AggregateRegularProduct = {
    _count: RegularProductCountAggregateOutputType | null
    _avg: RegularProductAvgAggregateOutputType | null
    _sum: RegularProductSumAggregateOutputType | null
    _min: RegularProductMinAggregateOutputType | null
    _max: RegularProductMaxAggregateOutputType | null
  }

  export type RegularProductAvgAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type RegularProductSumAggregateOutputType = {
    id: number | null
    dealerPricing: number | null
    endUserPricing: number | null
    productCompanyId: number | null
  }

  export type RegularProductMinAggregateOutputType = {
    id: number | null
    product: string | null
    type: string | null
    description: string | null
    dealerPricing: number | null
    endUserPricing: number | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type RegularProductMaxAggregateOutputType = {
    id: number | null
    product: string | null
    type: string | null
    description: string | null
    dealerPricing: number | null
    endUserPricing: number | null
    isDeleted: boolean | null
    productCompanyId: number | null
  }

  export type RegularProductCountAggregateOutputType = {
    id: number
    product: number
    type: number
    description: number
    dealerPricing: number
    endUserPricing: number
    isDeleted: number
    productCompanyId: number
    _all: number
  }


  export type RegularProductAvgAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type RegularProductSumAggregateInputType = {
    id?: true
    dealerPricing?: true
    endUserPricing?: true
    productCompanyId?: true
  }

  export type RegularProductMinAggregateInputType = {
    id?: true
    product?: true
    type?: true
    description?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type RegularProductMaxAggregateInputType = {
    id?: true
    product?: true
    type?: true
    description?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
  }

  export type RegularProductCountAggregateInputType = {
    id?: true
    product?: true
    type?: true
    description?: true
    dealerPricing?: true
    endUserPricing?: true
    isDeleted?: true
    productCompanyId?: true
    _all?: true
  }

  export type RegularProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularProduct to aggregate.
     */
    where?: RegularProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularProducts to fetch.
     */
    orderBy?: RegularProductOrderByWithRelationInput | RegularProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegularProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegularProducts
    **/
    _count?: true | RegularProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegularProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegularProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegularProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegularProductMaxAggregateInputType
  }

  export type GetRegularProductAggregateType<T extends RegularProductAggregateArgs> = {
        [P in keyof T & keyof AggregateRegularProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegularProduct[P]>
      : GetScalarType<T[P], AggregateRegularProduct[P]>
  }




  export type RegularProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegularProductWhereInput
    orderBy?: RegularProductOrderByWithAggregationInput | RegularProductOrderByWithAggregationInput[]
    by: RegularProductScalarFieldEnum[] | RegularProductScalarFieldEnum
    having?: RegularProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegularProductCountAggregateInputType | true
    _avg?: RegularProductAvgAggregateInputType
    _sum?: RegularProductSumAggregateInputType
    _min?: RegularProductMinAggregateInputType
    _max?: RegularProductMaxAggregateInputType
  }

  export type RegularProductGroupByOutputType = {
    id: number
    product: string
    type: string | null
    description: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted: boolean
    productCompanyId: number
    _count: RegularProductCountAggregateOutputType | null
    _avg: RegularProductAvgAggregateOutputType | null
    _sum: RegularProductSumAggregateOutputType | null
    _min: RegularProductMinAggregateOutputType | null
    _max: RegularProductMaxAggregateOutputType | null
  }

  type GetRegularProductGroupByPayload<T extends RegularProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegularProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegularProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegularProductGroupByOutputType[P]>
            : GetScalarType<T[P], RegularProductGroupByOutputType[P]>
        }
      >
    >


  export type RegularProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    type?: boolean
    description?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regularProduct"]>

  export type RegularProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    type?: boolean
    description?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regularProduct"]>

  export type RegularProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product?: boolean
    type?: boolean
    description?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regularProduct"]>

  export type RegularProductSelectScalar = {
    id?: boolean
    product?: boolean
    type?: boolean
    description?: boolean
    dealerPricing?: boolean
    endUserPricing?: boolean
    isDeleted?: boolean
    productCompanyId?: boolean
  }

  export type RegularProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product" | "type" | "description" | "dealerPricing" | "endUserPricing" | "isDeleted" | "productCompanyId", ExtArgs["result"]["regularProduct"]>
  export type RegularProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type RegularProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }
  export type RegularProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductCompany?: boolean | ProductCompanyDefaultArgs<ExtArgs>
  }

  export type $RegularProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegularProduct"
    objects: {
      ProductCompany: Prisma.$ProductCompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product: string
      type: string | null
      description: string | null
      dealerPricing: number
      endUserPricing: number
      isDeleted: boolean
      productCompanyId: number
    }, ExtArgs["result"]["regularProduct"]>
    composites: {}
  }

  type RegularProductGetPayload<S extends boolean | null | undefined | RegularProductDefaultArgs> = $Result.GetResult<Prisma.$RegularProductPayload, S>

  type RegularProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegularProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegularProductCountAggregateInputType | true
    }

  export interface RegularProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegularProduct'], meta: { name: 'RegularProduct' } }
    /**
     * Find zero or one RegularProduct that matches the filter.
     * @param {RegularProductFindUniqueArgs} args - Arguments to find a RegularProduct
     * @example
     * // Get one RegularProduct
     * const regularProduct = await prisma.regularProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegularProductFindUniqueArgs>(args: SelectSubset<T, RegularProductFindUniqueArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegularProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegularProductFindUniqueOrThrowArgs} args - Arguments to find a RegularProduct
     * @example
     * // Get one RegularProduct
     * const regularProduct = await prisma.regularProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegularProductFindUniqueOrThrowArgs>(args: SelectSubset<T, RegularProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegularProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductFindFirstArgs} args - Arguments to find a RegularProduct
     * @example
     * // Get one RegularProduct
     * const regularProduct = await prisma.regularProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegularProductFindFirstArgs>(args?: SelectSubset<T, RegularProductFindFirstArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegularProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductFindFirstOrThrowArgs} args - Arguments to find a RegularProduct
     * @example
     * // Get one RegularProduct
     * const regularProduct = await prisma.regularProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegularProductFindFirstOrThrowArgs>(args?: SelectSubset<T, RegularProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegularProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegularProducts
     * const regularProducts = await prisma.regularProduct.findMany()
     * 
     * // Get first 10 RegularProducts
     * const regularProducts = await prisma.regularProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regularProductWithIdOnly = await prisma.regularProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegularProductFindManyArgs>(args?: SelectSubset<T, RegularProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegularProduct.
     * @param {RegularProductCreateArgs} args - Arguments to create a RegularProduct.
     * @example
     * // Create one RegularProduct
     * const RegularProduct = await prisma.regularProduct.create({
     *   data: {
     *     // ... data to create a RegularProduct
     *   }
     * })
     * 
     */
    create<T extends RegularProductCreateArgs>(args: SelectSubset<T, RegularProductCreateArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegularProducts.
     * @param {RegularProductCreateManyArgs} args - Arguments to create many RegularProducts.
     * @example
     * // Create many RegularProducts
     * const regularProduct = await prisma.regularProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegularProductCreateManyArgs>(args?: SelectSubset<T, RegularProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegularProducts and returns the data saved in the database.
     * @param {RegularProductCreateManyAndReturnArgs} args - Arguments to create many RegularProducts.
     * @example
     * // Create many RegularProducts
     * const regularProduct = await prisma.regularProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegularProducts and only return the `id`
     * const regularProductWithIdOnly = await prisma.regularProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegularProductCreateManyAndReturnArgs>(args?: SelectSubset<T, RegularProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegularProduct.
     * @param {RegularProductDeleteArgs} args - Arguments to delete one RegularProduct.
     * @example
     * // Delete one RegularProduct
     * const RegularProduct = await prisma.regularProduct.delete({
     *   where: {
     *     // ... filter to delete one RegularProduct
     *   }
     * })
     * 
     */
    delete<T extends RegularProductDeleteArgs>(args: SelectSubset<T, RegularProductDeleteArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegularProduct.
     * @param {RegularProductUpdateArgs} args - Arguments to update one RegularProduct.
     * @example
     * // Update one RegularProduct
     * const regularProduct = await prisma.regularProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegularProductUpdateArgs>(args: SelectSubset<T, RegularProductUpdateArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegularProducts.
     * @param {RegularProductDeleteManyArgs} args - Arguments to filter RegularProducts to delete.
     * @example
     * // Delete a few RegularProducts
     * const { count } = await prisma.regularProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegularProductDeleteManyArgs>(args?: SelectSubset<T, RegularProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegularProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegularProducts
     * const regularProduct = await prisma.regularProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegularProductUpdateManyArgs>(args: SelectSubset<T, RegularProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegularProducts and returns the data updated in the database.
     * @param {RegularProductUpdateManyAndReturnArgs} args - Arguments to update many RegularProducts.
     * @example
     * // Update many RegularProducts
     * const regularProduct = await prisma.regularProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegularProducts and only return the `id`
     * const regularProductWithIdOnly = await prisma.regularProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegularProductUpdateManyAndReturnArgs>(args: SelectSubset<T, RegularProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegularProduct.
     * @param {RegularProductUpsertArgs} args - Arguments to update or create a RegularProduct.
     * @example
     * // Update or create a RegularProduct
     * const regularProduct = await prisma.regularProduct.upsert({
     *   create: {
     *     // ... data to create a RegularProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegularProduct we want to update
     *   }
     * })
     */
    upsert<T extends RegularProductUpsertArgs>(args: SelectSubset<T, RegularProductUpsertArgs<ExtArgs>>): Prisma__RegularProductClient<$Result.GetResult<Prisma.$RegularProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegularProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductCountArgs} args - Arguments to filter RegularProducts to count.
     * @example
     * // Count the number of RegularProducts
     * const count = await prisma.regularProduct.count({
     *   where: {
     *     // ... the filter for the RegularProducts we want to count
     *   }
     * })
    **/
    count<T extends RegularProductCountArgs>(
      args?: Subset<T, RegularProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegularProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegularProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegularProductAggregateArgs>(args: Subset<T, RegularProductAggregateArgs>): Prisma.PrismaPromise<GetRegularProductAggregateType<T>>

    /**
     * Group by RegularProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegularProductGroupByArgs} args - Group by arguments.
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
      T extends RegularProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegularProductGroupByArgs['orderBy'] }
        : { orderBy?: RegularProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegularProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegularProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegularProduct model
   */
  readonly fields: RegularProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegularProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegularProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductCompany<T extends ProductCompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductCompanyDefaultArgs<ExtArgs>>): Prisma__ProductCompanyClient<$Result.GetResult<Prisma.$ProductCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegularProduct model
   */
  interface RegularProductFieldRefs {
    readonly id: FieldRef<"RegularProduct", 'Int'>
    readonly product: FieldRef<"RegularProduct", 'String'>
    readonly type: FieldRef<"RegularProduct", 'String'>
    readonly description: FieldRef<"RegularProduct", 'String'>
    readonly dealerPricing: FieldRef<"RegularProduct", 'Float'>
    readonly endUserPricing: FieldRef<"RegularProduct", 'Float'>
    readonly isDeleted: FieldRef<"RegularProduct", 'Boolean'>
    readonly productCompanyId: FieldRef<"RegularProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RegularProduct findUnique
   */
  export type RegularProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter, which RegularProduct to fetch.
     */
    where: RegularProductWhereUniqueInput
  }

  /**
   * RegularProduct findUniqueOrThrow
   */
  export type RegularProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter, which RegularProduct to fetch.
     */
    where: RegularProductWhereUniqueInput
  }

  /**
   * RegularProduct findFirst
   */
  export type RegularProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter, which RegularProduct to fetch.
     */
    where?: RegularProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularProducts to fetch.
     */
    orderBy?: RegularProductOrderByWithRelationInput | RegularProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularProducts.
     */
    cursor?: RegularProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularProducts.
     */
    distinct?: RegularProductScalarFieldEnum | RegularProductScalarFieldEnum[]
  }

  /**
   * RegularProduct findFirstOrThrow
   */
  export type RegularProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter, which RegularProduct to fetch.
     */
    where?: RegularProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularProducts to fetch.
     */
    orderBy?: RegularProductOrderByWithRelationInput | RegularProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegularProducts.
     */
    cursor?: RegularProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegularProducts.
     */
    distinct?: RegularProductScalarFieldEnum | RegularProductScalarFieldEnum[]
  }

  /**
   * RegularProduct findMany
   */
  export type RegularProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter, which RegularProducts to fetch.
     */
    where?: RegularProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegularProducts to fetch.
     */
    orderBy?: RegularProductOrderByWithRelationInput | RegularProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegularProducts.
     */
    cursor?: RegularProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegularProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegularProducts.
     */
    skip?: number
    distinct?: RegularProductScalarFieldEnum | RegularProductScalarFieldEnum[]
  }

  /**
   * RegularProduct create
   */
  export type RegularProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * The data needed to create a RegularProduct.
     */
    data: XOR<RegularProductCreateInput, RegularProductUncheckedCreateInput>
  }

  /**
   * RegularProduct createMany
   */
  export type RegularProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegularProducts.
     */
    data: RegularProductCreateManyInput | RegularProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegularProduct createManyAndReturn
   */
  export type RegularProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * The data used to create many RegularProducts.
     */
    data: RegularProductCreateManyInput | RegularProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegularProduct update
   */
  export type RegularProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * The data needed to update a RegularProduct.
     */
    data: XOR<RegularProductUpdateInput, RegularProductUncheckedUpdateInput>
    /**
     * Choose, which RegularProduct to update.
     */
    where: RegularProductWhereUniqueInput
  }

  /**
   * RegularProduct updateMany
   */
  export type RegularProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegularProducts.
     */
    data: XOR<RegularProductUpdateManyMutationInput, RegularProductUncheckedUpdateManyInput>
    /**
     * Filter which RegularProducts to update
     */
    where?: RegularProductWhereInput
    /**
     * Limit how many RegularProducts to update.
     */
    limit?: number
  }

  /**
   * RegularProduct updateManyAndReturn
   */
  export type RegularProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * The data used to update RegularProducts.
     */
    data: XOR<RegularProductUpdateManyMutationInput, RegularProductUncheckedUpdateManyInput>
    /**
     * Filter which RegularProducts to update
     */
    where?: RegularProductWhereInput
    /**
     * Limit how many RegularProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegularProduct upsert
   */
  export type RegularProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * The filter to search for the RegularProduct to update in case it exists.
     */
    where: RegularProductWhereUniqueInput
    /**
     * In case the RegularProduct found by the `where` argument doesn't exist, create a new RegularProduct with this data.
     */
    create: XOR<RegularProductCreateInput, RegularProductUncheckedCreateInput>
    /**
     * In case the RegularProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegularProductUpdateInput, RegularProductUncheckedUpdateInput>
  }

  /**
   * RegularProduct delete
   */
  export type RegularProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
    /**
     * Filter which RegularProduct to delete.
     */
    where: RegularProductWhereUniqueInput
  }

  /**
   * RegularProduct deleteMany
   */
  export type RegularProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegularProducts to delete
     */
    where?: RegularProductWhereInput
    /**
     * Limit how many RegularProducts to delete.
     */
    limit?: number
  }

  /**
   * RegularProduct without action
   */
  export type RegularProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegularProduct
     */
    select?: RegularProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegularProduct
     */
    omit?: RegularProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegularProductInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    purchaseOrderName: string | null
    isQuote: boolean | null
    isSimple: boolean | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    purchaseOrderName: string | null
    isQuote: boolean | null
    isSimple: boolean | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    purchaseOrderName: number
    isQuote: number
    isSimple: number
    customerId: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    purchaseOrderName?: true
    isQuote?: true
    isSimple?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    purchaseOrderName?: true
    isQuote?: true
    isSimple?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    purchaseOrderName?: true
    isQuote?: true
    isSimple?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    purchaseOrderName: string | null
    isQuote: boolean
    isSimple: boolean
    customerId: number
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderName?: boolean
    isQuote?: boolean
    isSimple?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    PurchaseOrderItem?: boolean | PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderName?: boolean
    isQuote?: boolean
    isSimple?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    purchaseOrderName?: boolean
    isQuote?: boolean
    isSimple?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    purchaseOrderName?: boolean
    isQuote?: boolean
    isSimple?: boolean
    customerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "purchaseOrderName" | "isQuote" | "isSimple" | "customerId" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
    PurchaseOrderItem?: boolean | PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs>
      PurchaseOrderItem: Prisma.$PurchaseOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      purchaseOrderName: string | null
      isQuote: boolean
      isSimple: boolean
      customerId: number
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PurchaseOrderItem<T extends PurchaseOrder$PurchaseOrderItemArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$PurchaseOrderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly purchaseOrderName: FieldRef<"PurchaseOrder", 'String'>
    readonly isQuote: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly isSimple: FieldRef<"PurchaseOrder", 'Boolean'>
    readonly customerId: FieldRef<"PurchaseOrder", 'Int'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly isDeleted: FieldRef<"PurchaseOrder", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.PurchaseOrderItem
   */
  export type PurchaseOrder$PurchaseOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    where?: PurchaseOrderItemWhereInput
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    cursor?: PurchaseOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrderItem
   */

  export type AggregatePurchaseOrderItem = {
    _count: PurchaseOrderItemCountAggregateOutputType | null
    _avg: PurchaseOrderItemAvgAggregateOutputType | null
    _sum: PurchaseOrderItemSumAggregateOutputType | null
    _min: PurchaseOrderItemMinAggregateOutputType | null
    _max: PurchaseOrderItemMaxAggregateOutputType | null
  }

  export type PurchaseOrderItemAvgAggregateOutputType = {
    id: number | null
    puchaseOrderId: number | null
    productCompanyId: number | null
    productId: number | null
    quantity: number | null
  }

  export type PurchaseOrderItemSumAggregateOutputType = {
    id: number | null
    puchaseOrderId: number | null
    productCompanyId: number | null
    productId: number | null
    quantity: number | null
  }

  export type PurchaseOrderItemMinAggregateOutputType = {
    id: number | null
    puchaseOrderId: number | null
    productCompanyId: number | null
    productId: number | null
    quantity: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderItemMaxAggregateOutputType = {
    id: number | null
    puchaseOrderId: number | null
    productCompanyId: number | null
    productId: number | null
    quantity: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PurchaseOrderItemCountAggregateOutputType = {
    id: number
    puchaseOrderId: number
    productCompanyId: number
    productId: number
    quantity: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PurchaseOrderItemAvgAggregateInputType = {
    id?: true
    puchaseOrderId?: true
    productCompanyId?: true
    productId?: true
    quantity?: true
  }

  export type PurchaseOrderItemSumAggregateInputType = {
    id?: true
    puchaseOrderId?: true
    productCompanyId?: true
    productId?: true
    quantity?: true
  }

  export type PurchaseOrderItemMinAggregateInputType = {
    id?: true
    puchaseOrderId?: true
    productCompanyId?: true
    productId?: true
    quantity?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderItemMaxAggregateInputType = {
    id?: true
    puchaseOrderId?: true
    productCompanyId?: true
    productId?: true
    quantity?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PurchaseOrderItemCountAggregateInputType = {
    id?: true
    puchaseOrderId?: true
    productCompanyId?: true
    productId?: true
    quantity?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PurchaseOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderItem to aggregate.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrderItems
    **/
    _count?: true | PurchaseOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderItemMaxAggregateInputType
  }

  export type GetPurchaseOrderItemAggregateType<T extends PurchaseOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrderItem[P]>
      : GetScalarType<T[P], AggregatePurchaseOrderItem[P]>
  }




  export type PurchaseOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderItemWhereInput
    orderBy?: PurchaseOrderItemOrderByWithAggregationInput | PurchaseOrderItemOrderByWithAggregationInput[]
    by: PurchaseOrderItemScalarFieldEnum[] | PurchaseOrderItemScalarFieldEnum
    having?: PurchaseOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderItemCountAggregateInputType | true
    _avg?: PurchaseOrderItemAvgAggregateInputType
    _sum?: PurchaseOrderItemSumAggregateInputType
    _min?: PurchaseOrderItemMinAggregateInputType
    _max?: PurchaseOrderItemMaxAggregateInputType
  }

  export type PurchaseOrderItemGroupByOutputType = {
    id: number
    puchaseOrderId: number
    productCompanyId: number
    productId: number
    quantity: number
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: PurchaseOrderItemCountAggregateOutputType | null
    _avg: PurchaseOrderItemAvgAggregateOutputType | null
    _sum: PurchaseOrderItemSumAggregateOutputType | null
    _min: PurchaseOrderItemMinAggregateOutputType | null
    _max: PurchaseOrderItemMaxAggregateOutputType | null
  }

  type GetPurchaseOrderItemGroupByPayload<T extends PurchaseOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puchaseOrderId?: boolean
    productCompanyId?: boolean
    productId?: boolean
    quantity?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderItem"]>

  export type PurchaseOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puchaseOrderId?: boolean
    productCompanyId?: boolean
    productId?: boolean
    quantity?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderItem"]>

  export type PurchaseOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    puchaseOrderId?: boolean
    productCompanyId?: boolean
    productId?: boolean
    quantity?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderItem"]>

  export type PurchaseOrderItemSelectScalar = {
    id?: boolean
    puchaseOrderId?: boolean
    productCompanyId?: boolean
    productId?: boolean
    quantity?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PurchaseOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "puchaseOrderId" | "productCompanyId" | "productId" | "quantity" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrderItem"]>
  export type PurchaseOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PurchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrderItem"
    objects: {
      PurchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      puchaseOrderId: number
      productCompanyId: number
      productId: number
      quantity: number
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["purchaseOrderItem"]>
    composites: {}
  }

  type PurchaseOrderItemGetPayload<S extends boolean | null | undefined | PurchaseOrderItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderItemPayload, S>

  type PurchaseOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderItemCountAggregateInputType | true
    }

  export interface PurchaseOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderItem'], meta: { name: 'PurchaseOrderItem' } }
    /**
     * Find zero or one PurchaseOrderItem that matches the filter.
     * @param {PurchaseOrderItemFindUniqueArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderItemFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindFirstArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderItemFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrderItem
     * @example
     * // Get one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrderItems
     * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany()
     * 
     * // Get first 10 PurchaseOrderItems
     * const purchaseOrderItems = await prisma.purchaseOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderItemWithIdOnly = await prisma.purchaseOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderItemFindManyArgs>(args?: SelectSubset<T, PurchaseOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrderItem.
     * @param {PurchaseOrderItemCreateArgs} args - Arguments to create a PurchaseOrderItem.
     * @example
     * // Create one PurchaseOrderItem
     * const PurchaseOrderItem = await prisma.purchaseOrderItem.create({
     *   data: {
     *     // ... data to create a PurchaseOrderItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderItemCreateArgs>(args: SelectSubset<T, PurchaseOrderItemCreateArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrderItems.
     * @param {PurchaseOrderItemCreateManyArgs} args - Arguments to create many PurchaseOrderItems.
     * @example
     * // Create many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderItemCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrderItems and returns the data saved in the database.
     * @param {PurchaseOrderItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrderItems.
     * @example
     * // Create many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrderItems and only return the `id`
     * const purchaseOrderItemWithIdOnly = await prisma.purchaseOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrderItem.
     * @param {PurchaseOrderItemDeleteArgs} args - Arguments to delete one PurchaseOrderItem.
     * @example
     * // Delete one PurchaseOrderItem
     * const PurchaseOrderItem = await prisma.purchaseOrderItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrderItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderItemDeleteArgs>(args: SelectSubset<T, PurchaseOrderItemDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrderItem.
     * @param {PurchaseOrderItemUpdateArgs} args - Arguments to update one PurchaseOrderItem.
     * @example
     * // Update one PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderItemUpdateArgs>(args: SelectSubset<T, PurchaseOrderItemUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrderItems.
     * @param {PurchaseOrderItemDeleteManyArgs} args - Arguments to filter PurchaseOrderItems to delete.
     * @example
     * // Delete a few PurchaseOrderItems
     * const { count } = await prisma.purchaseOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderItemUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderItems and returns the data updated in the database.
     * @param {PurchaseOrderItemUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrderItems.
     * @example
     * // Update many PurchaseOrderItems
     * const purchaseOrderItem = await prisma.purchaseOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrderItems and only return the `id`
     * const purchaseOrderItemWithIdOnly = await prisma.purchaseOrderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchaseOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrderItem.
     * @param {PurchaseOrderItemUpsertArgs} args - Arguments to update or create a PurchaseOrderItem.
     * @example
     * // Update or create a PurchaseOrderItem
     * const purchaseOrderItem = await prisma.purchaseOrderItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderItemUpsertArgs>(args: SelectSubset<T, PurchaseOrderItemUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderItemClient<$Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemCountArgs} args - Arguments to filter PurchaseOrderItems to count.
     * @example
     * // Count the number of PurchaseOrderItems
     * const count = await prisma.purchaseOrderItem.count({
     *   where: {
     *     // ... the filter for the PurchaseOrderItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderItemCountArgs>(
      args?: Subset<T, PurchaseOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseOrderItemAggregateArgs>(args: Subset<T, PurchaseOrderItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderItemAggregateType<T>>

    /**
     * Group by PurchaseOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderItemGroupByArgs} args - Group by arguments.
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
      T extends PurchaseOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrderItem model
   */
  readonly fields: PurchaseOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PurchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PurchaseOrderItem model
   */
  interface PurchaseOrderItemFieldRefs {
    readonly id: FieldRef<"PurchaseOrderItem", 'Int'>
    readonly puchaseOrderId: FieldRef<"PurchaseOrderItem", 'Int'>
    readonly productCompanyId: FieldRef<"PurchaseOrderItem", 'Int'>
    readonly productId: FieldRef<"PurchaseOrderItem", 'Int'>
    readonly quantity: FieldRef<"PurchaseOrderItem", 'Float'>
    readonly note: FieldRef<"PurchaseOrderItem", 'String'>
    readonly createdAt: FieldRef<"PurchaseOrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PurchaseOrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrderItem findUnique
   */
  export type PurchaseOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem findUniqueOrThrow
   */
  export type PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem findFirst
   */
  export type PurchaseOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderItems.
     */
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem findFirstOrThrow
   */
  export type PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItem to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderItems.
     */
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem findMany
   */
  export type PurchaseOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderItems to fetch.
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderItems to fetch.
     */
    orderBy?: PurchaseOrderItemOrderByWithRelationInput | PurchaseOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrderItems.
     */
    cursor?: PurchaseOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderItems.
     */
    skip?: number
    distinct?: PurchaseOrderItemScalarFieldEnum | PurchaseOrderItemScalarFieldEnum[]
  }

  /**
   * PurchaseOrderItem create
   */
  export type PurchaseOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrderItem.
     */
    data: XOR<PurchaseOrderItemCreateInput, PurchaseOrderItemUncheckedCreateInput>
  }

  /**
   * PurchaseOrderItem createMany
   */
  export type PurchaseOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrderItems.
     */
    data: PurchaseOrderItemCreateManyInput | PurchaseOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrderItem createManyAndReturn
   */
  export type PurchaseOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrderItems.
     */
    data: PurchaseOrderItemCreateManyInput | PurchaseOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderItem update
   */
  export type PurchaseOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrderItem.
     */
    data: XOR<PurchaseOrderItemUpdateInput, PurchaseOrderItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrderItem to update.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem updateMany
   */
  export type PurchaseOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrderItems.
     */
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderItems to update
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * Limit how many PurchaseOrderItems to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrderItem updateManyAndReturn
   */
  export type PurchaseOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrderItems.
     */
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderItems to update
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * Limit how many PurchaseOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderItem upsert
   */
  export type PurchaseOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrderItem to update in case it exists.
     */
    where: PurchaseOrderItemWhereUniqueInput
    /**
     * In case the PurchaseOrderItem found by the `where` argument doesn't exist, create a new PurchaseOrderItem with this data.
     */
    create: XOR<PurchaseOrderItemCreateInput, PurchaseOrderItemUncheckedCreateInput>
    /**
     * In case the PurchaseOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderItemUpdateInput, PurchaseOrderItemUncheckedUpdateInput>
  }

  /**
   * PurchaseOrderItem delete
   */
  export type PurchaseOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrderItem to delete.
     */
    where: PurchaseOrderItemWhereUniqueInput
  }

  /**
   * PurchaseOrderItem deleteMany
   */
  export type PurchaseOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderItems to delete
     */
    where?: PurchaseOrderItemWhereInput
    /**
     * Limit how many PurchaseOrderItems to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrderItem without action
   */
  export type PurchaseOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderItem
     */
    select?: PurchaseOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderItem
     */
    omit?: PurchaseOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DealershipScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    isDeleted: 'isDeleted'
  };

  export type DealershipScalarFieldEnum = (typeof DealershipScalarFieldEnum)[keyof typeof DealershipScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street1: 'street1',
    street2: 'street2',
    state: 'state',
    city: 'city',
    zip: 'zip',
    phone: 'phone',
    email: 'email',
    isDeleted: 'isDeleted',
    dealershipId: 'dealershipId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductCompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyType: 'companyType',
    dealershipId: 'dealershipId',
    isDeleted: 'isDeleted'
  };

  export type ProductCompanyScalarFieldEnum = (typeof ProductCompanyScalarFieldEnum)[keyof typeof ProductCompanyScalarFieldEnum]


  export const BayerProductScalarFieldEnum: {
    id: 'id',
    trait: 'trait',
    variety: 'variety',
    treatment: 'treatment',
    seedSize: 'seedSize',
    packaging: 'packaging',
    cropType: 'cropType',
    productDetail: 'productDetail',
    dealerPricing: 'dealerPricing',
    endUserPricing: 'endUserPricing',
    agiisId: 'agiisId',
    sapId: 'sapId',
    isDeleted: 'isDeleted',
    productCompanyId: 'productCompanyId'
  };

  export type BayerProductScalarFieldEnum = (typeof BayerProductScalarFieldEnum)[keyof typeof BayerProductScalarFieldEnum]


  export const SeedProductScalarFieldEnum: {
    id: 'id',
    trait: 'trait',
    variety: 'variety',
    treatment: 'treatment',
    seedSize: 'seedSize',
    packaging: 'packaging',
    cropType: 'cropType',
    dealerPricing: 'dealerPricing',
    endUserPricing: 'endUserPricing',
    isDeleted: 'isDeleted',
    productCompanyId: 'productCompanyId'
  };

  export type SeedProductScalarFieldEnum = (typeof SeedProductScalarFieldEnum)[keyof typeof SeedProductScalarFieldEnum]


  export const RegularProductScalarFieldEnum: {
    id: 'id',
    product: 'product',
    type: 'type',
    description: 'description',
    dealerPricing: 'dealerPricing',
    endUserPricing: 'endUserPricing',
    isDeleted: 'isDeleted',
    productCompanyId: 'productCompanyId'
  };

  export type RegularProductScalarFieldEnum = (typeof RegularProductScalarFieldEnum)[keyof typeof RegularProductScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    purchaseOrderName: 'purchaseOrderName',
    isQuote: 'isQuote',
    isSimple: 'isSimple',
    customerId: 'customerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const PurchaseOrderItemScalarFieldEnum: {
    id: 'id',
    puchaseOrderId: 'puchaseOrderId',
    productCompanyId: 'productCompanyId',
    productId: 'productId',
    quantity: 'quantity',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PurchaseOrderItemScalarFieldEnum = (typeof PurchaseOrderItemScalarFieldEnum)[keyof typeof PurchaseOrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CompanyType'
   */
  export type EnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType'>
    


  /**
   * Reference to a field of type 'CompanyType[]'
   */
  export type ListEnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType[]'>
    


  /**
   * Reference to a field of type 'CropType'
   */
  export type EnumCropTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CropType'>
    


  /**
   * Reference to a field of type 'CropType[]'
   */
  export type ListEnumCropTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CropType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type DealershipWhereInput = {
    AND?: DealershipWhereInput | DealershipWhereInput[]
    OR?: DealershipWhereInput[]
    NOT?: DealershipWhereInput | DealershipWhereInput[]
    id?: IntFilter<"Dealership"> | number
    name?: StringFilter<"Dealership"> | string
    password?: StringFilter<"Dealership"> | string
    isDeleted?: BoolFilter<"Dealership"> | boolean
    Customer?: CustomerListRelationFilter
    ProductCompany?: ProductCompanyListRelationFilter
  }

  export type DealershipOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    Customer?: CustomerOrderByRelationAggregateInput
    ProductCompany?: ProductCompanyOrderByRelationAggregateInput
  }

  export type DealershipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DealershipWhereInput | DealershipWhereInput[]
    OR?: DealershipWhereInput[]
    NOT?: DealershipWhereInput | DealershipWhereInput[]
    name?: StringFilter<"Dealership"> | string
    password?: StringFilter<"Dealership"> | string
    isDeleted?: BoolFilter<"Dealership"> | boolean
    Customer?: CustomerListRelationFilter
    ProductCompany?: ProductCompanyListRelationFilter
  }, "id">

  export type DealershipOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
    _count?: DealershipCountOrderByAggregateInput
    _avg?: DealershipAvgOrderByAggregateInput
    _max?: DealershipMaxOrderByAggregateInput
    _min?: DealershipMinOrderByAggregateInput
    _sum?: DealershipSumOrderByAggregateInput
  }

  export type DealershipScalarWhereWithAggregatesInput = {
    AND?: DealershipScalarWhereWithAggregatesInput | DealershipScalarWhereWithAggregatesInput[]
    OR?: DealershipScalarWhereWithAggregatesInput[]
    NOT?: DealershipScalarWhereWithAggregatesInput | DealershipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dealership"> | number
    name?: StringWithAggregatesFilter<"Dealership"> | string
    password?: StringWithAggregatesFilter<"Dealership"> | string
    isDeleted?: BoolWithAggregatesFilter<"Dealership"> | boolean
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    street1?: StringNullableFilter<"Customer"> | string | null
    street2?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    zip?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    isDeleted?: BoolFilter<"Customer"> | boolean
    dealershipId?: IntFilter<"Customer"> | number
    Dealership?: XOR<DealershipScalarRelationFilter, DealershipWhereInput>
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    dealershipId?: SortOrder
    Dealership?: DealershipOrderByWithRelationInput
    PurchaseOrder?: PurchaseOrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    street1?: StringNullableFilter<"Customer"> | string | null
    street2?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    zip?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    isDeleted?: BoolFilter<"Customer"> | boolean
    dealershipId?: IntFilter<"Customer"> | number
    Dealership?: XOR<DealershipScalarRelationFilter, DealershipWhereInput>
    PurchaseOrder?: PurchaseOrderListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrderInput | SortOrder
    street2?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    dealershipId?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    street1?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    street2?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    state?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Customer"> | boolean
    dealershipId?: IntWithAggregatesFilter<"Customer"> | number
  }

  export type ProductCompanyWhereInput = {
    AND?: ProductCompanyWhereInput | ProductCompanyWhereInput[]
    OR?: ProductCompanyWhereInput[]
    NOT?: ProductCompanyWhereInput | ProductCompanyWhereInput[]
    id?: IntFilter<"ProductCompany"> | number
    name?: StringFilter<"ProductCompany"> | string
    companyType?: EnumCompanyTypeFilter<"ProductCompany"> | $Enums.CompanyType
    dealershipId?: IntFilter<"ProductCompany"> | number
    isDeleted?: BoolFilter<"ProductCompany"> | boolean
    Dealership?: XOR<DealershipScalarRelationFilter, DealershipWhereInput>
    SeedProduct?: SeedProductListRelationFilter
    BayerProduct?: BayerProductListRelationFilter
    RegularProduct?: RegularProductListRelationFilter
  }

  export type ProductCompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyType?: SortOrder
    dealershipId?: SortOrder
    isDeleted?: SortOrder
    Dealership?: DealershipOrderByWithRelationInput
    SeedProduct?: SeedProductOrderByRelationAggregateInput
    BayerProduct?: BayerProductOrderByRelationAggregateInput
    RegularProduct?: RegularProductOrderByRelationAggregateInput
  }

  export type ProductCompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCompanyWhereInput | ProductCompanyWhereInput[]
    OR?: ProductCompanyWhereInput[]
    NOT?: ProductCompanyWhereInput | ProductCompanyWhereInput[]
    name?: StringFilter<"ProductCompany"> | string
    companyType?: EnumCompanyTypeFilter<"ProductCompany"> | $Enums.CompanyType
    dealershipId?: IntFilter<"ProductCompany"> | number
    isDeleted?: BoolFilter<"ProductCompany"> | boolean
    Dealership?: XOR<DealershipScalarRelationFilter, DealershipWhereInput>
    SeedProduct?: SeedProductListRelationFilter
    BayerProduct?: BayerProductListRelationFilter
    RegularProduct?: RegularProductListRelationFilter
  }, "id">

  export type ProductCompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyType?: SortOrder
    dealershipId?: SortOrder
    isDeleted?: SortOrder
    _count?: ProductCompanyCountOrderByAggregateInput
    _avg?: ProductCompanyAvgOrderByAggregateInput
    _max?: ProductCompanyMaxOrderByAggregateInput
    _min?: ProductCompanyMinOrderByAggregateInput
    _sum?: ProductCompanySumOrderByAggregateInput
  }

  export type ProductCompanyScalarWhereWithAggregatesInput = {
    AND?: ProductCompanyScalarWhereWithAggregatesInput | ProductCompanyScalarWhereWithAggregatesInput[]
    OR?: ProductCompanyScalarWhereWithAggregatesInput[]
    NOT?: ProductCompanyScalarWhereWithAggregatesInput | ProductCompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCompany"> | number
    name?: StringWithAggregatesFilter<"ProductCompany"> | string
    companyType?: EnumCompanyTypeWithAggregatesFilter<"ProductCompany"> | $Enums.CompanyType
    dealershipId?: IntWithAggregatesFilter<"ProductCompany"> | number
    isDeleted?: BoolWithAggregatesFilter<"ProductCompany"> | boolean
  }

  export type BayerProductWhereInput = {
    AND?: BayerProductWhereInput | BayerProductWhereInput[]
    OR?: BayerProductWhereInput[]
    NOT?: BayerProductWhereInput | BayerProductWhereInput[]
    id?: IntFilter<"BayerProduct"> | number
    trait?: StringFilter<"BayerProduct"> | string
    variety?: StringFilter<"BayerProduct"> | string
    treatment?: StringFilter<"BayerProduct"> | string
    seedSize?: StringFilter<"BayerProduct"> | string
    packaging?: StringFilter<"BayerProduct"> | string
    cropType?: EnumCropTypeFilter<"BayerProduct"> | $Enums.CropType
    productDetail?: StringFilter<"BayerProduct"> | string
    dealerPricing?: FloatFilter<"BayerProduct"> | number
    endUserPricing?: FloatFilter<"BayerProduct"> | number
    agiisId?: StringFilter<"BayerProduct"> | string
    sapId?: StringFilter<"BayerProduct"> | string
    isDeleted?: BoolFilter<"BayerProduct"> | boolean
    productCompanyId?: IntFilter<"BayerProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }

  export type BayerProductOrderByWithRelationInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    productDetail?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    agiisId?: SortOrder
    sapId?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    ProductCompany?: ProductCompanyOrderByWithRelationInput
  }

  export type BayerProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trait_variety_treatment_seedSize_cropType_packaging_agiisId_sapId?: BayerProductTraitVarietyTreatmentSeedSizeCropTypePackagingAgiisIdSapIdCompoundUniqueInput
    AND?: BayerProductWhereInput | BayerProductWhereInput[]
    OR?: BayerProductWhereInput[]
    NOT?: BayerProductWhereInput | BayerProductWhereInput[]
    trait?: StringFilter<"BayerProduct"> | string
    variety?: StringFilter<"BayerProduct"> | string
    treatment?: StringFilter<"BayerProduct"> | string
    seedSize?: StringFilter<"BayerProduct"> | string
    packaging?: StringFilter<"BayerProduct"> | string
    cropType?: EnumCropTypeFilter<"BayerProduct"> | $Enums.CropType
    productDetail?: StringFilter<"BayerProduct"> | string
    dealerPricing?: FloatFilter<"BayerProduct"> | number
    endUserPricing?: FloatFilter<"BayerProduct"> | number
    agiisId?: StringFilter<"BayerProduct"> | string
    sapId?: StringFilter<"BayerProduct"> | string
    isDeleted?: BoolFilter<"BayerProduct"> | boolean
    productCompanyId?: IntFilter<"BayerProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }, "id" | "trait_variety_treatment_seedSize_cropType_packaging_agiisId_sapId">

  export type BayerProductOrderByWithAggregationInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    productDetail?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    agiisId?: SortOrder
    sapId?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    _count?: BayerProductCountOrderByAggregateInput
    _avg?: BayerProductAvgOrderByAggregateInput
    _max?: BayerProductMaxOrderByAggregateInput
    _min?: BayerProductMinOrderByAggregateInput
    _sum?: BayerProductSumOrderByAggregateInput
  }

  export type BayerProductScalarWhereWithAggregatesInput = {
    AND?: BayerProductScalarWhereWithAggregatesInput | BayerProductScalarWhereWithAggregatesInput[]
    OR?: BayerProductScalarWhereWithAggregatesInput[]
    NOT?: BayerProductScalarWhereWithAggregatesInput | BayerProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BayerProduct"> | number
    trait?: StringWithAggregatesFilter<"BayerProduct"> | string
    variety?: StringWithAggregatesFilter<"BayerProduct"> | string
    treatment?: StringWithAggregatesFilter<"BayerProduct"> | string
    seedSize?: StringWithAggregatesFilter<"BayerProduct"> | string
    packaging?: StringWithAggregatesFilter<"BayerProduct"> | string
    cropType?: EnumCropTypeWithAggregatesFilter<"BayerProduct"> | $Enums.CropType
    productDetail?: StringWithAggregatesFilter<"BayerProduct"> | string
    dealerPricing?: FloatWithAggregatesFilter<"BayerProduct"> | number
    endUserPricing?: FloatWithAggregatesFilter<"BayerProduct"> | number
    agiisId?: StringWithAggregatesFilter<"BayerProduct"> | string
    sapId?: StringWithAggregatesFilter<"BayerProduct"> | string
    isDeleted?: BoolWithAggregatesFilter<"BayerProduct"> | boolean
    productCompanyId?: IntWithAggregatesFilter<"BayerProduct"> | number
  }

  export type SeedProductWhereInput = {
    AND?: SeedProductWhereInput | SeedProductWhereInput[]
    OR?: SeedProductWhereInput[]
    NOT?: SeedProductWhereInput | SeedProductWhereInput[]
    id?: IntFilter<"SeedProduct"> | number
    trait?: StringFilter<"SeedProduct"> | string
    variety?: StringFilter<"SeedProduct"> | string
    treatment?: StringFilter<"SeedProduct"> | string
    seedSize?: StringFilter<"SeedProduct"> | string
    packaging?: StringFilter<"SeedProduct"> | string
    cropType?: EnumCropTypeFilter<"SeedProduct"> | $Enums.CropType
    dealerPricing?: FloatFilter<"SeedProduct"> | number
    endUserPricing?: FloatFilter<"SeedProduct"> | number
    isDeleted?: BoolFilter<"SeedProduct"> | boolean
    productCompanyId?: IntFilter<"SeedProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }

  export type SeedProductOrderByWithRelationInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    ProductCompany?: ProductCompanyOrderByWithRelationInput
  }

  export type SeedProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trait_variety_treatment_seedSize_cropType_packaging?: SeedProductTraitVarietyTreatmentSeedSizeCropTypePackagingCompoundUniqueInput
    AND?: SeedProductWhereInput | SeedProductWhereInput[]
    OR?: SeedProductWhereInput[]
    NOT?: SeedProductWhereInput | SeedProductWhereInput[]
    trait?: StringFilter<"SeedProduct"> | string
    variety?: StringFilter<"SeedProduct"> | string
    treatment?: StringFilter<"SeedProduct"> | string
    seedSize?: StringFilter<"SeedProduct"> | string
    packaging?: StringFilter<"SeedProduct"> | string
    cropType?: EnumCropTypeFilter<"SeedProduct"> | $Enums.CropType
    dealerPricing?: FloatFilter<"SeedProduct"> | number
    endUserPricing?: FloatFilter<"SeedProduct"> | number
    isDeleted?: BoolFilter<"SeedProduct"> | boolean
    productCompanyId?: IntFilter<"SeedProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }, "id" | "trait_variety_treatment_seedSize_cropType_packaging">

  export type SeedProductOrderByWithAggregationInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    _count?: SeedProductCountOrderByAggregateInput
    _avg?: SeedProductAvgOrderByAggregateInput
    _max?: SeedProductMaxOrderByAggregateInput
    _min?: SeedProductMinOrderByAggregateInput
    _sum?: SeedProductSumOrderByAggregateInput
  }

  export type SeedProductScalarWhereWithAggregatesInput = {
    AND?: SeedProductScalarWhereWithAggregatesInput | SeedProductScalarWhereWithAggregatesInput[]
    OR?: SeedProductScalarWhereWithAggregatesInput[]
    NOT?: SeedProductScalarWhereWithAggregatesInput | SeedProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeedProduct"> | number
    trait?: StringWithAggregatesFilter<"SeedProduct"> | string
    variety?: StringWithAggregatesFilter<"SeedProduct"> | string
    treatment?: StringWithAggregatesFilter<"SeedProduct"> | string
    seedSize?: StringWithAggregatesFilter<"SeedProduct"> | string
    packaging?: StringWithAggregatesFilter<"SeedProduct"> | string
    cropType?: EnumCropTypeWithAggregatesFilter<"SeedProduct"> | $Enums.CropType
    dealerPricing?: FloatWithAggregatesFilter<"SeedProduct"> | number
    endUserPricing?: FloatWithAggregatesFilter<"SeedProduct"> | number
    isDeleted?: BoolWithAggregatesFilter<"SeedProduct"> | boolean
    productCompanyId?: IntWithAggregatesFilter<"SeedProduct"> | number
  }

  export type RegularProductWhereInput = {
    AND?: RegularProductWhereInput | RegularProductWhereInput[]
    OR?: RegularProductWhereInput[]
    NOT?: RegularProductWhereInput | RegularProductWhereInput[]
    id?: IntFilter<"RegularProduct"> | number
    product?: StringFilter<"RegularProduct"> | string
    type?: StringNullableFilter<"RegularProduct"> | string | null
    description?: StringNullableFilter<"RegularProduct"> | string | null
    dealerPricing?: FloatFilter<"RegularProduct"> | number
    endUserPricing?: FloatFilter<"RegularProduct"> | number
    isDeleted?: BoolFilter<"RegularProduct"> | boolean
    productCompanyId?: IntFilter<"RegularProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }

  export type RegularProductOrderByWithRelationInput = {
    id?: SortOrder
    product?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    ProductCompany?: ProductCompanyOrderByWithRelationInput
  }

  export type RegularProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegularProductWhereInput | RegularProductWhereInput[]
    OR?: RegularProductWhereInput[]
    NOT?: RegularProductWhereInput | RegularProductWhereInput[]
    product?: StringFilter<"RegularProduct"> | string
    type?: StringNullableFilter<"RegularProduct"> | string | null
    description?: StringNullableFilter<"RegularProduct"> | string | null
    dealerPricing?: FloatFilter<"RegularProduct"> | number
    endUserPricing?: FloatFilter<"RegularProduct"> | number
    isDeleted?: BoolFilter<"RegularProduct"> | boolean
    productCompanyId?: IntFilter<"RegularProduct"> | number
    ProductCompany?: XOR<ProductCompanyScalarRelationFilter, ProductCompanyWhereInput>
  }, "id">

  export type RegularProductOrderByWithAggregationInput = {
    id?: SortOrder
    product?: SortOrder
    type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
    _count?: RegularProductCountOrderByAggregateInput
    _avg?: RegularProductAvgOrderByAggregateInput
    _max?: RegularProductMaxOrderByAggregateInput
    _min?: RegularProductMinOrderByAggregateInput
    _sum?: RegularProductSumOrderByAggregateInput
  }

  export type RegularProductScalarWhereWithAggregatesInput = {
    AND?: RegularProductScalarWhereWithAggregatesInput | RegularProductScalarWhereWithAggregatesInput[]
    OR?: RegularProductScalarWhereWithAggregatesInput[]
    NOT?: RegularProductScalarWhereWithAggregatesInput | RegularProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RegularProduct"> | number
    product?: StringWithAggregatesFilter<"RegularProduct"> | string
    type?: StringNullableWithAggregatesFilter<"RegularProduct"> | string | null
    description?: StringNullableWithAggregatesFilter<"RegularProduct"> | string | null
    dealerPricing?: FloatWithAggregatesFilter<"RegularProduct"> | number
    endUserPricing?: FloatWithAggregatesFilter<"RegularProduct"> | number
    isDeleted?: BoolWithAggregatesFilter<"RegularProduct"> | boolean
    productCompanyId?: IntWithAggregatesFilter<"RegularProduct"> | number
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    purchaseOrderName?: StringNullableFilter<"PurchaseOrder"> | string | null
    isQuote?: BoolFilter<"PurchaseOrder"> | boolean
    isSimple?: BoolFilter<"PurchaseOrder"> | boolean
    customerId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    purchaseOrderName?: SortOrderInput | SortOrder
    isQuote?: SortOrder
    isSimple?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    Customer?: CustomerOrderByWithRelationInput
    PurchaseOrderItem?: PurchaseOrderItemOrderByRelationAggregateInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    purchaseOrderName?: StringNullableFilter<"PurchaseOrder"> | string | null
    isQuote?: BoolFilter<"PurchaseOrder"> | boolean
    isSimple?: BoolFilter<"PurchaseOrder"> | boolean
    customerId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
    Customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    PurchaseOrderItem?: PurchaseOrderItemListRelationFilter
  }, "id">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    purchaseOrderName?: SortOrderInput | SortOrder
    isQuote?: SortOrder
    isSimple?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    purchaseOrderName?: StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null
    isQuote?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    isSimple?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
    customerId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"PurchaseOrder"> | boolean
  }

  export type PurchaseOrderItemWhereInput = {
    AND?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    OR?: PurchaseOrderItemWhereInput[]
    NOT?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    id?: IntFilter<"PurchaseOrderItem"> | number
    puchaseOrderId?: IntFilter<"PurchaseOrderItem"> | number
    productCompanyId?: IntFilter<"PurchaseOrderItem"> | number
    productId?: IntFilter<"PurchaseOrderItem"> | number
    quantity?: FloatFilter<"PurchaseOrderItem"> | number
    note?: StringNullableFilter<"PurchaseOrderItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    PurchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }

  export type PurchaseOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PurchaseOrder?: PurchaseOrderOrderByWithRelationInput
  }

  export type PurchaseOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productCompanyId_productId?: PurchaseOrderItemProductCompanyIdProductIdCompoundUniqueInput
    AND?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    OR?: PurchaseOrderItemWhereInput[]
    NOT?: PurchaseOrderItemWhereInput | PurchaseOrderItemWhereInput[]
    puchaseOrderId?: IntFilter<"PurchaseOrderItem"> | number
    productCompanyId?: IntFilter<"PurchaseOrderItem"> | number
    productId?: IntFilter<"PurchaseOrderItem"> | number
    quantity?: FloatFilter<"PurchaseOrderItem"> | number
    note?: StringNullableFilter<"PurchaseOrderItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    PurchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
  }, "id" | "productCompanyId_productId">

  export type PurchaseOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PurchaseOrderItemCountOrderByAggregateInput
    _avg?: PurchaseOrderItemAvgOrderByAggregateInput
    _max?: PurchaseOrderItemMaxOrderByAggregateInput
    _min?: PurchaseOrderItemMinOrderByAggregateInput
    _sum?: PurchaseOrderItemSumOrderByAggregateInput
  }

  export type PurchaseOrderItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderItemScalarWhereWithAggregatesInput | PurchaseOrderItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderItemScalarWhereWithAggregatesInput | PurchaseOrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrderItem"> | number
    puchaseOrderId?: IntWithAggregatesFilter<"PurchaseOrderItem"> | number
    productCompanyId?: IntWithAggregatesFilter<"PurchaseOrderItem"> | number
    productId?: IntWithAggregatesFilter<"PurchaseOrderItem"> | number
    quantity?: FloatWithAggregatesFilter<"PurchaseOrderItem"> | number
    note?: StringNullableWithAggregatesFilter<"PurchaseOrderItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string
  }

  export type DealershipCreateInput = {
    name: string
    password: string
    isDeleted?: boolean
    Customer?: CustomerCreateNestedManyWithoutDealershipInput
    ProductCompany?: ProductCompanyCreateNestedManyWithoutDealershipInput
  }

  export type DealershipUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    isDeleted?: boolean
    Customer?: CustomerUncheckedCreateNestedManyWithoutDealershipInput
    ProductCompany?: ProductCompanyUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type DealershipUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUpdateManyWithoutDealershipNestedInput
    ProductCompany?: ProductCompanyUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUncheckedUpdateManyWithoutDealershipNestedInput
    ProductCompany?: ProductCompanyUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipCreateManyInput = {
    id?: number
    name: string
    password: string
    isDeleted?: boolean
  }

  export type DealershipUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DealershipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateInput = {
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutCustomerInput
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    dealershipId: number
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutCustomerNestedInput
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dealershipId?: IntFieldUpdateOperationsInput | number
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    dealershipId: number
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dealershipId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCompanyCreateInput = {
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutProductCompanyInput
    SeedProduct?: SeedProductCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUncheckedCreateInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted?: boolean
    SeedProduct?: SeedProductUncheckedCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductUncheckedCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductUncheckedCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutProductCompanyNestedInput
    SeedProduct?: SeedProductUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    dealershipId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    SeedProduct?: SeedProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUncheckedUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyCreateManyInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted?: boolean
  }

  export type ProductCompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    dealershipId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BayerProductCreateInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
    ProductCompany: ProductCompanyCreateNestedOneWithoutBayerProductInput
  }

  export type BayerProductUncheckedCreateInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
    productCompanyId: number
  }

  export type BayerProductUpdateInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductCompany?: ProductCompanyUpdateOneRequiredWithoutBayerProductNestedInput
  }

  export type BayerProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type BayerProductCreateManyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
    productCompanyId: number
  }

  export type BayerProductUpdateManyMutationInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BayerProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type SeedProductCreateInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    ProductCompany: ProductCompanyCreateNestedOneWithoutSeedProductInput
  }

  export type SeedProductUncheckedCreateInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    productCompanyId: number
  }

  export type SeedProductUpdateInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductCompany?: ProductCompanyUpdateOneRequiredWithoutSeedProductNestedInput
  }

  export type SeedProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type SeedProductCreateManyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    productCompanyId: number
  }

  export type SeedProductUpdateManyMutationInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeedProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type RegularProductCreateInput = {
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    ProductCompany: ProductCompanyCreateNestedOneWithoutRegularProductInput
  }

  export type RegularProductUncheckedCreateInput = {
    id?: number
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    productCompanyId: number
  }

  export type RegularProductUpdateInput = {
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductCompany?: ProductCompanyUpdateOneRequiredWithoutRegularProductNestedInput
  }

  export type RegularProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type RegularProductCreateManyInput = {
    id?: number
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
    productCompanyId: number
  }

  export type RegularProductUpdateManyMutationInput = {
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegularProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    productCompanyId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderCreateInput = {
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Customer: CustomerCreateNestedOneWithoutPurchaseOrderInput
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUpdateOneRequiredWithoutPurchaseOrderNestedInput
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemCreateInput = {
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    PurchaseOrder: PurchaseOrderCreateNestedOneWithoutPurchaseOrderItemInput
  }

  export type PurchaseOrderItemUncheckedCreateInput = {
    id?: number
    puchaseOrderId: number
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemUpdateInput = {
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PurchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderItemNestedInput
  }

  export type PurchaseOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    puchaseOrderId?: IntFieldUpdateOperationsInput | number
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderItemCreateManyInput = {
    id?: number
    puchaseOrderId: number
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemUpdateManyMutationInput = {
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    puchaseOrderId?: IntFieldUpdateOperationsInput | number
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type ProductCompanyListRelationFilter = {
    every?: ProductCompanyWhereInput
    some?: ProductCompanyWhereInput
    none?: ProductCompanyWhereInput
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealershipCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type DealershipAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DealershipMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type DealershipMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    isDeleted?: SortOrder
  }

  export type DealershipSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DealershipScalarRelationFilter = {
    is?: DealershipWhereInput
    isNot?: DealershipWhereInput
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isDeleted?: SortOrder
    dealershipId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isDeleted?: SortOrder
    dealershipId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street1?: SortOrder
    street2?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isDeleted?: SortOrder
    dealershipId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCompanyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTypeFilter<$PrismaModel> | $Enums.CompanyType
  }

  export type SeedProductListRelationFilter = {
    every?: SeedProductWhereInput
    some?: SeedProductWhereInput
    none?: SeedProductWhereInput
  }

  export type BayerProductListRelationFilter = {
    every?: BayerProductWhereInput
    some?: BayerProductWhereInput
    none?: BayerProductWhereInput
  }

  export type RegularProductListRelationFilter = {
    every?: RegularProductWhereInput
    some?: RegularProductWhereInput
    none?: RegularProductWhereInput
  }

  export type SeedProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BayerProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegularProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyType?: SortOrder
    dealershipId?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
  }

  export type ProductCompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyType?: SortOrder
    dealershipId?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyType?: SortOrder
    dealershipId?: SortOrder
    isDeleted?: SortOrder
  }

  export type ProductCompanySumOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
  }

  export type EnumCompanyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompanyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyTypeFilter<$PrismaModel>
    _max?: NestedEnumCompanyTypeFilter<$PrismaModel>
  }

  export type EnumCropTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CropType | EnumCropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCropTypeFilter<$PrismaModel> | $Enums.CropType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductCompanyScalarRelationFilter = {
    is?: ProductCompanyWhereInput
    isNot?: ProductCompanyWhereInput
  }

  export type BayerProductTraitVarietyTreatmentSeedSizeCropTypePackagingAgiisIdSapIdCompoundUniqueInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    cropType: $Enums.CropType
    packaging: string
    agiisId: string
    sapId: string
  }

  export type BayerProductCountOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    productDetail?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    agiisId?: SortOrder
    sapId?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type BayerProductAvgOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type BayerProductMaxOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    productDetail?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    agiisId?: SortOrder
    sapId?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type BayerProductMinOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    productDetail?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    agiisId?: SortOrder
    sapId?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type BayerProductSumOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type EnumCropTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CropType | EnumCropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCropTypeWithAggregatesFilter<$PrismaModel> | $Enums.CropType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCropTypeFilter<$PrismaModel>
    _max?: NestedEnumCropTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SeedProductTraitVarietyTreatmentSeedSizeCropTypePackagingCompoundUniqueInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    cropType: $Enums.CropType
    packaging: string
  }

  export type SeedProductCountOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type SeedProductAvgOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type SeedProductMaxOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type SeedProductMinOrderByAggregateInput = {
    id?: SortOrder
    trait?: SortOrder
    variety?: SortOrder
    treatment?: SortOrder
    seedSize?: SortOrder
    packaging?: SortOrder
    cropType?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type SeedProductSumOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type RegularProductCountOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    type?: SortOrder
    description?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type RegularProductAvgOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type RegularProductMaxOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    type?: SortOrder
    description?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type RegularProductMinOrderByAggregateInput = {
    id?: SortOrder
    product?: SortOrder
    type?: SortOrder
    description?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    isDeleted?: SortOrder
    productCompanyId?: SortOrder
  }

  export type RegularProductSumOrderByAggregateInput = {
    id?: SortOrder
    dealerPricing?: SortOrder
    endUserPricing?: SortOrder
    productCompanyId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PurchaseOrderItemListRelationFilter = {
    every?: PurchaseOrderItemWhereInput
    some?: PurchaseOrderItemWhereInput
    none?: PurchaseOrderItemWhereInput
  }

  export type PurchaseOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderName?: SortOrder
    isQuote?: SortOrder
    isSimple?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderName?: SortOrder
    isQuote?: SortOrder
    isSimple?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderName?: SortOrder
    isQuote?: SortOrder
    isSimple?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderItemProductCompanyIdProductIdCompoundUniqueInput = {
    productCompanyId: number
    productId: number
  }

  export type PurchaseOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type PurchaseOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PurchaseOrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    puchaseOrderId?: SortOrder
    productCompanyId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type CustomerCreateNestedManyWithoutDealershipInput = {
    create?: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput> | CustomerCreateWithoutDealershipInput[] | CustomerUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDealershipInput | CustomerCreateOrConnectWithoutDealershipInput[]
    createMany?: CustomerCreateManyDealershipInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ProductCompanyCreateNestedManyWithoutDealershipInput = {
    create?: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput> | ProductCompanyCreateWithoutDealershipInput[] | ProductCompanyUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutDealershipInput | ProductCompanyCreateOrConnectWithoutDealershipInput[]
    createMany?: ProductCompanyCreateManyDealershipInputEnvelope
    connect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutDealershipInput = {
    create?: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput> | CustomerCreateWithoutDealershipInput[] | CustomerUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDealershipInput | CustomerCreateOrConnectWithoutDealershipInput[]
    createMany?: CustomerCreateManyDealershipInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ProductCompanyUncheckedCreateNestedManyWithoutDealershipInput = {
    create?: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput> | ProductCompanyCreateWithoutDealershipInput[] | ProductCompanyUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutDealershipInput | ProductCompanyCreateOrConnectWithoutDealershipInput[]
    createMany?: ProductCompanyCreateManyDealershipInputEnvelope
    connect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput> | CustomerCreateWithoutDealershipInput[] | CustomerUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDealershipInput | CustomerCreateOrConnectWithoutDealershipInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDealershipInput | CustomerUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: CustomerCreateManyDealershipInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDealershipInput | CustomerUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDealershipInput | CustomerUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ProductCompanyUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput> | ProductCompanyCreateWithoutDealershipInput[] | ProductCompanyUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutDealershipInput | ProductCompanyCreateOrConnectWithoutDealershipInput[]
    upsert?: ProductCompanyUpsertWithWhereUniqueWithoutDealershipInput | ProductCompanyUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: ProductCompanyCreateManyDealershipInputEnvelope
    set?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    disconnect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    delete?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    connect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    update?: ProductCompanyUpdateWithWhereUniqueWithoutDealershipInput | ProductCompanyUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: ProductCompanyUpdateManyWithWhereWithoutDealershipInput | ProductCompanyUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: ProductCompanyScalarWhereInput | ProductCompanyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUncheckedUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput> | CustomerCreateWithoutDealershipInput[] | CustomerUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDealershipInput | CustomerCreateOrConnectWithoutDealershipInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDealershipInput | CustomerUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: CustomerCreateManyDealershipInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDealershipInput | CustomerUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDealershipInput | CustomerUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ProductCompanyUncheckedUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput> | ProductCompanyCreateWithoutDealershipInput[] | ProductCompanyUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutDealershipInput | ProductCompanyCreateOrConnectWithoutDealershipInput[]
    upsert?: ProductCompanyUpsertWithWhereUniqueWithoutDealershipInput | ProductCompanyUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: ProductCompanyCreateManyDealershipInputEnvelope
    set?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    disconnect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    delete?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    connect?: ProductCompanyWhereUniqueInput | ProductCompanyWhereUniqueInput[]
    update?: ProductCompanyUpdateWithWhereUniqueWithoutDealershipInput | ProductCompanyUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: ProductCompanyUpdateManyWithWhereWithoutDealershipInput | ProductCompanyUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: ProductCompanyScalarWhereInput | ProductCompanyScalarWhereInput[]
  }

  export type DealershipCreateNestedOneWithoutCustomerInput = {
    create?: XOR<DealershipCreateWithoutCustomerInput, DealershipUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: DealershipCreateOrConnectWithoutCustomerInput
    connect?: DealershipWhereUniqueInput
  }

  export type PurchaseOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput> | PurchaseOrderCreateWithoutCustomerInput[] | PurchaseOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutCustomerInput | PurchaseOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseOrderCreateManyCustomerInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput> | PurchaseOrderCreateWithoutCustomerInput[] | PurchaseOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutCustomerInput | PurchaseOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: PurchaseOrderCreateManyCustomerInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DealershipUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<DealershipCreateWithoutCustomerInput, DealershipUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: DealershipCreateOrConnectWithoutCustomerInput
    upsert?: DealershipUpsertWithoutCustomerInput
    connect?: DealershipWhereUniqueInput
    update?: XOR<XOR<DealershipUpdateToOneWithWhereWithoutCustomerInput, DealershipUpdateWithoutCustomerInput>, DealershipUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput> | PurchaseOrderCreateWithoutCustomerInput[] | PurchaseOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutCustomerInput | PurchaseOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutCustomerInput | PurchaseOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseOrderCreateManyCustomerInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutCustomerInput | PurchaseOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutCustomerInput | PurchaseOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput> | PurchaseOrderCreateWithoutCustomerInput[] | PurchaseOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutCustomerInput | PurchaseOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutCustomerInput | PurchaseOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PurchaseOrderCreateManyCustomerInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutCustomerInput | PurchaseOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutCustomerInput | PurchaseOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type DealershipCreateNestedOneWithoutProductCompanyInput = {
    create?: XOR<DealershipCreateWithoutProductCompanyInput, DealershipUncheckedCreateWithoutProductCompanyInput>
    connectOrCreate?: DealershipCreateOrConnectWithoutProductCompanyInput
    connect?: DealershipWhereUniqueInput
  }

  export type SeedProductCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput> | SeedProductCreateWithoutProductCompanyInput[] | SeedProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: SeedProductCreateOrConnectWithoutProductCompanyInput | SeedProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: SeedProductCreateManyProductCompanyInputEnvelope
    connect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
  }

  export type BayerProductCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput> | BayerProductCreateWithoutProductCompanyInput[] | BayerProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: BayerProductCreateOrConnectWithoutProductCompanyInput | BayerProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: BayerProductCreateManyProductCompanyInputEnvelope
    connect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
  }

  export type RegularProductCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput> | RegularProductCreateWithoutProductCompanyInput[] | RegularProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: RegularProductCreateOrConnectWithoutProductCompanyInput | RegularProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: RegularProductCreateManyProductCompanyInputEnvelope
    connect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
  }

  export type SeedProductUncheckedCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput> | SeedProductCreateWithoutProductCompanyInput[] | SeedProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: SeedProductCreateOrConnectWithoutProductCompanyInput | SeedProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: SeedProductCreateManyProductCompanyInputEnvelope
    connect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
  }

  export type BayerProductUncheckedCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput> | BayerProductCreateWithoutProductCompanyInput[] | BayerProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: BayerProductCreateOrConnectWithoutProductCompanyInput | BayerProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: BayerProductCreateManyProductCompanyInputEnvelope
    connect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
  }

  export type RegularProductUncheckedCreateNestedManyWithoutProductCompanyInput = {
    create?: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput> | RegularProductCreateWithoutProductCompanyInput[] | RegularProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: RegularProductCreateOrConnectWithoutProductCompanyInput | RegularProductCreateOrConnectWithoutProductCompanyInput[]
    createMany?: RegularProductCreateManyProductCompanyInputEnvelope
    connect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
  }

  export type EnumCompanyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CompanyType
  }

  export type DealershipUpdateOneRequiredWithoutProductCompanyNestedInput = {
    create?: XOR<DealershipCreateWithoutProductCompanyInput, DealershipUncheckedCreateWithoutProductCompanyInput>
    connectOrCreate?: DealershipCreateOrConnectWithoutProductCompanyInput
    upsert?: DealershipUpsertWithoutProductCompanyInput
    connect?: DealershipWhereUniqueInput
    update?: XOR<XOR<DealershipUpdateToOneWithWhereWithoutProductCompanyInput, DealershipUpdateWithoutProductCompanyInput>, DealershipUncheckedUpdateWithoutProductCompanyInput>
  }

  export type SeedProductUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput> | SeedProductCreateWithoutProductCompanyInput[] | SeedProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: SeedProductCreateOrConnectWithoutProductCompanyInput | SeedProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: SeedProductUpsertWithWhereUniqueWithoutProductCompanyInput | SeedProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: SeedProductCreateManyProductCompanyInputEnvelope
    set?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    disconnect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    delete?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    connect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    update?: SeedProductUpdateWithWhereUniqueWithoutProductCompanyInput | SeedProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: SeedProductUpdateManyWithWhereWithoutProductCompanyInput | SeedProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: SeedProductScalarWhereInput | SeedProductScalarWhereInput[]
  }

  export type BayerProductUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput> | BayerProductCreateWithoutProductCompanyInput[] | BayerProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: BayerProductCreateOrConnectWithoutProductCompanyInput | BayerProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: BayerProductUpsertWithWhereUniqueWithoutProductCompanyInput | BayerProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: BayerProductCreateManyProductCompanyInputEnvelope
    set?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    disconnect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    delete?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    connect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    update?: BayerProductUpdateWithWhereUniqueWithoutProductCompanyInput | BayerProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: BayerProductUpdateManyWithWhereWithoutProductCompanyInput | BayerProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: BayerProductScalarWhereInput | BayerProductScalarWhereInput[]
  }

  export type RegularProductUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput> | RegularProductCreateWithoutProductCompanyInput[] | RegularProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: RegularProductCreateOrConnectWithoutProductCompanyInput | RegularProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: RegularProductUpsertWithWhereUniqueWithoutProductCompanyInput | RegularProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: RegularProductCreateManyProductCompanyInputEnvelope
    set?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    disconnect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    delete?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    connect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    update?: RegularProductUpdateWithWhereUniqueWithoutProductCompanyInput | RegularProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: RegularProductUpdateManyWithWhereWithoutProductCompanyInput | RegularProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: RegularProductScalarWhereInput | RegularProductScalarWhereInput[]
  }

  export type SeedProductUncheckedUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput> | SeedProductCreateWithoutProductCompanyInput[] | SeedProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: SeedProductCreateOrConnectWithoutProductCompanyInput | SeedProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: SeedProductUpsertWithWhereUniqueWithoutProductCompanyInput | SeedProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: SeedProductCreateManyProductCompanyInputEnvelope
    set?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    disconnect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    delete?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    connect?: SeedProductWhereUniqueInput | SeedProductWhereUniqueInput[]
    update?: SeedProductUpdateWithWhereUniqueWithoutProductCompanyInput | SeedProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: SeedProductUpdateManyWithWhereWithoutProductCompanyInput | SeedProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: SeedProductScalarWhereInput | SeedProductScalarWhereInput[]
  }

  export type BayerProductUncheckedUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput> | BayerProductCreateWithoutProductCompanyInput[] | BayerProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: BayerProductCreateOrConnectWithoutProductCompanyInput | BayerProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: BayerProductUpsertWithWhereUniqueWithoutProductCompanyInput | BayerProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: BayerProductCreateManyProductCompanyInputEnvelope
    set?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    disconnect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    delete?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    connect?: BayerProductWhereUniqueInput | BayerProductWhereUniqueInput[]
    update?: BayerProductUpdateWithWhereUniqueWithoutProductCompanyInput | BayerProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: BayerProductUpdateManyWithWhereWithoutProductCompanyInput | BayerProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: BayerProductScalarWhereInput | BayerProductScalarWhereInput[]
  }

  export type RegularProductUncheckedUpdateManyWithoutProductCompanyNestedInput = {
    create?: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput> | RegularProductCreateWithoutProductCompanyInput[] | RegularProductUncheckedCreateWithoutProductCompanyInput[]
    connectOrCreate?: RegularProductCreateOrConnectWithoutProductCompanyInput | RegularProductCreateOrConnectWithoutProductCompanyInput[]
    upsert?: RegularProductUpsertWithWhereUniqueWithoutProductCompanyInput | RegularProductUpsertWithWhereUniqueWithoutProductCompanyInput[]
    createMany?: RegularProductCreateManyProductCompanyInputEnvelope
    set?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    disconnect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    delete?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    connect?: RegularProductWhereUniqueInput | RegularProductWhereUniqueInput[]
    update?: RegularProductUpdateWithWhereUniqueWithoutProductCompanyInput | RegularProductUpdateWithWhereUniqueWithoutProductCompanyInput[]
    updateMany?: RegularProductUpdateManyWithWhereWithoutProductCompanyInput | RegularProductUpdateManyWithWhereWithoutProductCompanyInput[]
    deleteMany?: RegularProductScalarWhereInput | RegularProductScalarWhereInput[]
  }

  export type ProductCompanyCreateNestedOneWithoutBayerProductInput = {
    create?: XOR<ProductCompanyCreateWithoutBayerProductInput, ProductCompanyUncheckedCreateWithoutBayerProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutBayerProductInput
    connect?: ProductCompanyWhereUniqueInput
  }

  export type EnumCropTypeFieldUpdateOperationsInput = {
    set?: $Enums.CropType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCompanyUpdateOneRequiredWithoutBayerProductNestedInput = {
    create?: XOR<ProductCompanyCreateWithoutBayerProductInput, ProductCompanyUncheckedCreateWithoutBayerProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutBayerProductInput
    upsert?: ProductCompanyUpsertWithoutBayerProductInput
    connect?: ProductCompanyWhereUniqueInput
    update?: XOR<XOR<ProductCompanyUpdateToOneWithWhereWithoutBayerProductInput, ProductCompanyUpdateWithoutBayerProductInput>, ProductCompanyUncheckedUpdateWithoutBayerProductInput>
  }

  export type ProductCompanyCreateNestedOneWithoutSeedProductInput = {
    create?: XOR<ProductCompanyCreateWithoutSeedProductInput, ProductCompanyUncheckedCreateWithoutSeedProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutSeedProductInput
    connect?: ProductCompanyWhereUniqueInput
  }

  export type ProductCompanyUpdateOneRequiredWithoutSeedProductNestedInput = {
    create?: XOR<ProductCompanyCreateWithoutSeedProductInput, ProductCompanyUncheckedCreateWithoutSeedProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutSeedProductInput
    upsert?: ProductCompanyUpsertWithoutSeedProductInput
    connect?: ProductCompanyWhereUniqueInput
    update?: XOR<XOR<ProductCompanyUpdateToOneWithWhereWithoutSeedProductInput, ProductCompanyUpdateWithoutSeedProductInput>, ProductCompanyUncheckedUpdateWithoutSeedProductInput>
  }

  export type ProductCompanyCreateNestedOneWithoutRegularProductInput = {
    create?: XOR<ProductCompanyCreateWithoutRegularProductInput, ProductCompanyUncheckedCreateWithoutRegularProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutRegularProductInput
    connect?: ProductCompanyWhereUniqueInput
  }

  export type ProductCompanyUpdateOneRequiredWithoutRegularProductNestedInput = {
    create?: XOR<ProductCompanyCreateWithoutRegularProductInput, ProductCompanyUncheckedCreateWithoutRegularProductInput>
    connectOrCreate?: ProductCompanyCreateOrConnectWithoutRegularProductInput
    upsert?: ProductCompanyUpsertWithoutRegularProductInput
    connect?: ProductCompanyWhereUniqueInput
    update?: XOR<XOR<ProductCompanyUpdateToOneWithWhereWithoutRegularProductInput, ProductCompanyUpdateWithoutRegularProductInput>, ProductCompanyUncheckedUpdateWithoutRegularProductInput>
  }

  export type CustomerCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<CustomerCreateWithoutPurchaseOrderInput, CustomerUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchaseOrderInput
    connect?: CustomerWhereUniqueInput
  }

  export type PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<CustomerCreateWithoutPurchaseOrderInput, CustomerUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPurchaseOrderInput
    upsert?: CustomerUpsertWithoutPurchaseOrderInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPurchaseOrderInput, CustomerUpdateWithoutPurchaseOrderInput>, CustomerUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    disconnect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    delete?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    connect?: PurchaseOrderItemWhereUniqueInput | PurchaseOrderItemWhereUniqueInput[]
    update?: PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
  }

  export type PurchaseOrderCreateNestedOneWithoutPurchaseOrderItemInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderItemNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput
    upsert?: PurchaseOrderUpsertWithoutPurchaseOrderItemInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderItemInput, PurchaseOrderUpdateWithoutPurchaseOrderItemInput>, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCompanyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTypeFilter<$PrismaModel> | $Enums.CompanyType
  }

  export type NestedEnumCompanyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCompanyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CompanyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompanyTypeFilter<$PrismaModel>
    _max?: NestedEnumCompanyTypeFilter<$PrismaModel>
  }

  export type NestedEnumCropTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CropType | EnumCropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCropTypeFilter<$PrismaModel> | $Enums.CropType
  }

  export type NestedEnumCropTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CropType | EnumCropTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CropType[] | ListEnumCropTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCropTypeWithAggregatesFilter<$PrismaModel> | $Enums.CropType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCropTypeFilter<$PrismaModel>
    _max?: NestedEnumCropTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutDealershipInput = {
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDealershipInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    PurchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDealershipInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput>
  }

  export type CustomerCreateManyDealershipInputEnvelope = {
    data: CustomerCreateManyDealershipInput | CustomerCreateManyDealershipInput[]
    skipDuplicates?: boolean
  }

  export type ProductCompanyCreateWithoutDealershipInput = {
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    SeedProduct?: SeedProductCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUncheckedCreateWithoutDealershipInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    SeedProduct?: SeedProductUncheckedCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductUncheckedCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductUncheckedCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyCreateOrConnectWithoutDealershipInput = {
    where: ProductCompanyWhereUniqueInput
    create: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput>
  }

  export type ProductCompanyCreateManyDealershipInputEnvelope = {
    data: ProductCompanyCreateManyDealershipInput | ProductCompanyCreateManyDealershipInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutDealershipInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutDealershipInput, CustomerUncheckedUpdateWithoutDealershipInput>
    create: XOR<CustomerCreateWithoutDealershipInput, CustomerUncheckedCreateWithoutDealershipInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutDealershipInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutDealershipInput, CustomerUncheckedUpdateWithoutDealershipInput>
  }

  export type CustomerUpdateManyWithWhereWithoutDealershipInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutDealershipInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    street1?: StringNullableFilter<"Customer"> | string | null
    street2?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    zip?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    isDeleted?: BoolFilter<"Customer"> | boolean
    dealershipId?: IntFilter<"Customer"> | number
  }

  export type ProductCompanyUpsertWithWhereUniqueWithoutDealershipInput = {
    where: ProductCompanyWhereUniqueInput
    update: XOR<ProductCompanyUpdateWithoutDealershipInput, ProductCompanyUncheckedUpdateWithoutDealershipInput>
    create: XOR<ProductCompanyCreateWithoutDealershipInput, ProductCompanyUncheckedCreateWithoutDealershipInput>
  }

  export type ProductCompanyUpdateWithWhereUniqueWithoutDealershipInput = {
    where: ProductCompanyWhereUniqueInput
    data: XOR<ProductCompanyUpdateWithoutDealershipInput, ProductCompanyUncheckedUpdateWithoutDealershipInput>
  }

  export type ProductCompanyUpdateManyWithWhereWithoutDealershipInput = {
    where: ProductCompanyScalarWhereInput
    data: XOR<ProductCompanyUpdateManyMutationInput, ProductCompanyUncheckedUpdateManyWithoutDealershipInput>
  }

  export type ProductCompanyScalarWhereInput = {
    AND?: ProductCompanyScalarWhereInput | ProductCompanyScalarWhereInput[]
    OR?: ProductCompanyScalarWhereInput[]
    NOT?: ProductCompanyScalarWhereInput | ProductCompanyScalarWhereInput[]
    id?: IntFilter<"ProductCompany"> | number
    name?: StringFilter<"ProductCompany"> | string
    companyType?: EnumCompanyTypeFilter<"ProductCompany"> | $Enums.CompanyType
    dealershipId?: IntFilter<"ProductCompany"> | number
    isDeleted?: BoolFilter<"ProductCompany"> | boolean
  }

  export type DealershipCreateWithoutCustomerInput = {
    name: string
    password: string
    isDeleted?: boolean
    ProductCompany?: ProductCompanyCreateNestedManyWithoutDealershipInput
  }

  export type DealershipUncheckedCreateWithoutCustomerInput = {
    id?: number
    name: string
    password: string
    isDeleted?: boolean
    ProductCompany?: ProductCompanyUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type DealershipCreateOrConnectWithoutCustomerInput = {
    where: DealershipWhereUniqueInput
    create: XOR<DealershipCreateWithoutCustomerInput, DealershipUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseOrderCreateWithoutCustomerInput = {
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutCustomerInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseOrderCreateManyCustomerInputEnvelope = {
    data: PurchaseOrderCreateManyCustomerInput | PurchaseOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DealershipUpsertWithoutCustomerInput = {
    update: XOR<DealershipUpdateWithoutCustomerInput, DealershipUncheckedUpdateWithoutCustomerInput>
    create: XOR<DealershipCreateWithoutCustomerInput, DealershipUncheckedCreateWithoutCustomerInput>
    where?: DealershipWhereInput
  }

  export type DealershipUpdateToOneWithWhereWithoutCustomerInput = {
    where?: DealershipWhereInput
    data: XOR<DealershipUpdateWithoutCustomerInput, DealershipUncheckedUpdateWithoutCustomerInput>
  }

  export type DealershipUpdateWithoutCustomerInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductCompany?: ProductCompanyUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    ProductCompany?: ProductCompanyUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutCustomerInput, PurchaseOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<PurchaseOrderCreateWithoutCustomerInput, PurchaseOrderUncheckedCreateWithoutCustomerInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutCustomerInput, PurchaseOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    purchaseOrderName?: StringNullableFilter<"PurchaseOrder"> | string | null
    isQuote?: BoolFilter<"PurchaseOrder"> | boolean
    isSimple?: BoolFilter<"PurchaseOrder"> | boolean
    customerId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    isDeleted?: BoolFilter<"PurchaseOrder"> | boolean
  }

  export type DealershipCreateWithoutProductCompanyInput = {
    name: string
    password: string
    isDeleted?: boolean
    Customer?: CustomerCreateNestedManyWithoutDealershipInput
  }

  export type DealershipUncheckedCreateWithoutProductCompanyInput = {
    id?: number
    name: string
    password: string
    isDeleted?: boolean
    Customer?: CustomerUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type DealershipCreateOrConnectWithoutProductCompanyInput = {
    where: DealershipWhereUniqueInput
    create: XOR<DealershipCreateWithoutProductCompanyInput, DealershipUncheckedCreateWithoutProductCompanyInput>
  }

  export type SeedProductCreateWithoutProductCompanyInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type SeedProductUncheckedCreateWithoutProductCompanyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type SeedProductCreateOrConnectWithoutProductCompanyInput = {
    where: SeedProductWhereUniqueInput
    create: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type SeedProductCreateManyProductCompanyInputEnvelope = {
    data: SeedProductCreateManyProductCompanyInput | SeedProductCreateManyProductCompanyInput[]
    skipDuplicates?: boolean
  }

  export type BayerProductCreateWithoutProductCompanyInput = {
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
  }

  export type BayerProductUncheckedCreateWithoutProductCompanyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
  }

  export type BayerProductCreateOrConnectWithoutProductCompanyInput = {
    where: BayerProductWhereUniqueInput
    create: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type BayerProductCreateManyProductCompanyInputEnvelope = {
    data: BayerProductCreateManyProductCompanyInput | BayerProductCreateManyProductCompanyInput[]
    skipDuplicates?: boolean
  }

  export type RegularProductCreateWithoutProductCompanyInput = {
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type RegularProductUncheckedCreateWithoutProductCompanyInput = {
    id?: number
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type RegularProductCreateOrConnectWithoutProductCompanyInput = {
    where: RegularProductWhereUniqueInput
    create: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type RegularProductCreateManyProductCompanyInputEnvelope = {
    data: RegularProductCreateManyProductCompanyInput | RegularProductCreateManyProductCompanyInput[]
    skipDuplicates?: boolean
  }

  export type DealershipUpsertWithoutProductCompanyInput = {
    update: XOR<DealershipUpdateWithoutProductCompanyInput, DealershipUncheckedUpdateWithoutProductCompanyInput>
    create: XOR<DealershipCreateWithoutProductCompanyInput, DealershipUncheckedCreateWithoutProductCompanyInput>
    where?: DealershipWhereInput
  }

  export type DealershipUpdateToOneWithWhereWithoutProductCompanyInput = {
    where?: DealershipWhereInput
    data: XOR<DealershipUpdateWithoutProductCompanyInput, DealershipUncheckedUpdateWithoutProductCompanyInput>
  }

  export type DealershipUpdateWithoutProductCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipUncheckedUpdateWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type SeedProductUpsertWithWhereUniqueWithoutProductCompanyInput = {
    where: SeedProductWhereUniqueInput
    update: XOR<SeedProductUpdateWithoutProductCompanyInput, SeedProductUncheckedUpdateWithoutProductCompanyInput>
    create: XOR<SeedProductCreateWithoutProductCompanyInput, SeedProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type SeedProductUpdateWithWhereUniqueWithoutProductCompanyInput = {
    where: SeedProductWhereUniqueInput
    data: XOR<SeedProductUpdateWithoutProductCompanyInput, SeedProductUncheckedUpdateWithoutProductCompanyInput>
  }

  export type SeedProductUpdateManyWithWhereWithoutProductCompanyInput = {
    where: SeedProductScalarWhereInput
    data: XOR<SeedProductUpdateManyMutationInput, SeedProductUncheckedUpdateManyWithoutProductCompanyInput>
  }

  export type SeedProductScalarWhereInput = {
    AND?: SeedProductScalarWhereInput | SeedProductScalarWhereInput[]
    OR?: SeedProductScalarWhereInput[]
    NOT?: SeedProductScalarWhereInput | SeedProductScalarWhereInput[]
    id?: IntFilter<"SeedProduct"> | number
    trait?: StringFilter<"SeedProduct"> | string
    variety?: StringFilter<"SeedProduct"> | string
    treatment?: StringFilter<"SeedProduct"> | string
    seedSize?: StringFilter<"SeedProduct"> | string
    packaging?: StringFilter<"SeedProduct"> | string
    cropType?: EnumCropTypeFilter<"SeedProduct"> | $Enums.CropType
    dealerPricing?: FloatFilter<"SeedProduct"> | number
    endUserPricing?: FloatFilter<"SeedProduct"> | number
    isDeleted?: BoolFilter<"SeedProduct"> | boolean
    productCompanyId?: IntFilter<"SeedProduct"> | number
  }

  export type BayerProductUpsertWithWhereUniqueWithoutProductCompanyInput = {
    where: BayerProductWhereUniqueInput
    update: XOR<BayerProductUpdateWithoutProductCompanyInput, BayerProductUncheckedUpdateWithoutProductCompanyInput>
    create: XOR<BayerProductCreateWithoutProductCompanyInput, BayerProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type BayerProductUpdateWithWhereUniqueWithoutProductCompanyInput = {
    where: BayerProductWhereUniqueInput
    data: XOR<BayerProductUpdateWithoutProductCompanyInput, BayerProductUncheckedUpdateWithoutProductCompanyInput>
  }

  export type BayerProductUpdateManyWithWhereWithoutProductCompanyInput = {
    where: BayerProductScalarWhereInput
    data: XOR<BayerProductUpdateManyMutationInput, BayerProductUncheckedUpdateManyWithoutProductCompanyInput>
  }

  export type BayerProductScalarWhereInput = {
    AND?: BayerProductScalarWhereInput | BayerProductScalarWhereInput[]
    OR?: BayerProductScalarWhereInput[]
    NOT?: BayerProductScalarWhereInput | BayerProductScalarWhereInput[]
    id?: IntFilter<"BayerProduct"> | number
    trait?: StringFilter<"BayerProduct"> | string
    variety?: StringFilter<"BayerProduct"> | string
    treatment?: StringFilter<"BayerProduct"> | string
    seedSize?: StringFilter<"BayerProduct"> | string
    packaging?: StringFilter<"BayerProduct"> | string
    cropType?: EnumCropTypeFilter<"BayerProduct"> | $Enums.CropType
    productDetail?: StringFilter<"BayerProduct"> | string
    dealerPricing?: FloatFilter<"BayerProduct"> | number
    endUserPricing?: FloatFilter<"BayerProduct"> | number
    agiisId?: StringFilter<"BayerProduct"> | string
    sapId?: StringFilter<"BayerProduct"> | string
    isDeleted?: BoolFilter<"BayerProduct"> | boolean
    productCompanyId?: IntFilter<"BayerProduct"> | number
  }

  export type RegularProductUpsertWithWhereUniqueWithoutProductCompanyInput = {
    where: RegularProductWhereUniqueInput
    update: XOR<RegularProductUpdateWithoutProductCompanyInput, RegularProductUncheckedUpdateWithoutProductCompanyInput>
    create: XOR<RegularProductCreateWithoutProductCompanyInput, RegularProductUncheckedCreateWithoutProductCompanyInput>
  }

  export type RegularProductUpdateWithWhereUniqueWithoutProductCompanyInput = {
    where: RegularProductWhereUniqueInput
    data: XOR<RegularProductUpdateWithoutProductCompanyInput, RegularProductUncheckedUpdateWithoutProductCompanyInput>
  }

  export type RegularProductUpdateManyWithWhereWithoutProductCompanyInput = {
    where: RegularProductScalarWhereInput
    data: XOR<RegularProductUpdateManyMutationInput, RegularProductUncheckedUpdateManyWithoutProductCompanyInput>
  }

  export type RegularProductScalarWhereInput = {
    AND?: RegularProductScalarWhereInput | RegularProductScalarWhereInput[]
    OR?: RegularProductScalarWhereInput[]
    NOT?: RegularProductScalarWhereInput | RegularProductScalarWhereInput[]
    id?: IntFilter<"RegularProduct"> | number
    product?: StringFilter<"RegularProduct"> | string
    type?: StringNullableFilter<"RegularProduct"> | string | null
    description?: StringNullableFilter<"RegularProduct"> | string | null
    dealerPricing?: FloatFilter<"RegularProduct"> | number
    endUserPricing?: FloatFilter<"RegularProduct"> | number
    isDeleted?: BoolFilter<"RegularProduct"> | boolean
    productCompanyId?: IntFilter<"RegularProduct"> | number
  }

  export type ProductCompanyCreateWithoutBayerProductInput = {
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutProductCompanyInput
    SeedProduct?: SeedProductCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUncheckedCreateWithoutBayerProductInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted?: boolean
    SeedProduct?: SeedProductUncheckedCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductUncheckedCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyCreateOrConnectWithoutBayerProductInput = {
    where: ProductCompanyWhereUniqueInput
    create: XOR<ProductCompanyCreateWithoutBayerProductInput, ProductCompanyUncheckedCreateWithoutBayerProductInput>
  }

  export type ProductCompanyUpsertWithoutBayerProductInput = {
    update: XOR<ProductCompanyUpdateWithoutBayerProductInput, ProductCompanyUncheckedUpdateWithoutBayerProductInput>
    create: XOR<ProductCompanyCreateWithoutBayerProductInput, ProductCompanyUncheckedCreateWithoutBayerProductInput>
    where?: ProductCompanyWhereInput
  }

  export type ProductCompanyUpdateToOneWithWhereWithoutBayerProductInput = {
    where?: ProductCompanyWhereInput
    data: XOR<ProductCompanyUpdateWithoutBayerProductInput, ProductCompanyUncheckedUpdateWithoutBayerProductInput>
  }

  export type ProductCompanyUpdateWithoutBayerProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutProductCompanyNestedInput
    SeedProduct?: SeedProductUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateWithoutBayerProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    dealershipId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    SeedProduct?: SeedProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUncheckedUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyCreateWithoutSeedProductInput = {
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutProductCompanyInput
    BayerProduct?: BayerProductCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUncheckedCreateWithoutSeedProductInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted?: boolean
    BayerProduct?: BayerProductUncheckedCreateNestedManyWithoutProductCompanyInput
    RegularProduct?: RegularProductUncheckedCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyCreateOrConnectWithoutSeedProductInput = {
    where: ProductCompanyWhereUniqueInput
    create: XOR<ProductCompanyCreateWithoutSeedProductInput, ProductCompanyUncheckedCreateWithoutSeedProductInput>
  }

  export type ProductCompanyUpsertWithoutSeedProductInput = {
    update: XOR<ProductCompanyUpdateWithoutSeedProductInput, ProductCompanyUncheckedUpdateWithoutSeedProductInput>
    create: XOR<ProductCompanyCreateWithoutSeedProductInput, ProductCompanyUncheckedCreateWithoutSeedProductInput>
    where?: ProductCompanyWhereInput
  }

  export type ProductCompanyUpdateToOneWithWhereWithoutSeedProductInput = {
    where?: ProductCompanyWhereInput
    data: XOR<ProductCompanyUpdateWithoutSeedProductInput, ProductCompanyUncheckedUpdateWithoutSeedProductInput>
  }

  export type ProductCompanyUpdateWithoutSeedProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateWithoutSeedProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    dealershipId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    BayerProduct?: BayerProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUncheckedUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyCreateWithoutRegularProductInput = {
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutProductCompanyInput
    SeedProduct?: SeedProductCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyUncheckedCreateWithoutRegularProductInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    dealershipId: number
    isDeleted?: boolean
    SeedProduct?: SeedProductUncheckedCreateNestedManyWithoutProductCompanyInput
    BayerProduct?: BayerProductUncheckedCreateNestedManyWithoutProductCompanyInput
  }

  export type ProductCompanyCreateOrConnectWithoutRegularProductInput = {
    where: ProductCompanyWhereUniqueInput
    create: XOR<ProductCompanyCreateWithoutRegularProductInput, ProductCompanyUncheckedCreateWithoutRegularProductInput>
  }

  export type ProductCompanyUpsertWithoutRegularProductInput = {
    update: XOR<ProductCompanyUpdateWithoutRegularProductInput, ProductCompanyUncheckedUpdateWithoutRegularProductInput>
    create: XOR<ProductCompanyCreateWithoutRegularProductInput, ProductCompanyUncheckedCreateWithoutRegularProductInput>
    where?: ProductCompanyWhereInput
  }

  export type ProductCompanyUpdateToOneWithWhereWithoutRegularProductInput = {
    where?: ProductCompanyWhereInput
    data: XOR<ProductCompanyUpdateWithoutRegularProductInput, ProductCompanyUncheckedUpdateWithoutRegularProductInput>
  }

  export type ProductCompanyUpdateWithoutRegularProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutProductCompanyNestedInput
    SeedProduct?: SeedProductUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateWithoutRegularProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    dealershipId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    SeedProduct?: SeedProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUncheckedUpdateManyWithoutProductCompanyNestedInput
  }

  export type CustomerCreateWithoutPurchaseOrderInput = {
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    Dealership: DealershipCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
    dealershipId: number
  }

  export type CustomerCreateOrConnectWithoutPurchaseOrderInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPurchaseOrderInput, CustomerUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemCreateWithoutPurchaseOrderInput = {
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    create: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope = {
    data: PurchaseOrderItemCreateManyPurchaseOrderInput | PurchaseOrderItemCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutPurchaseOrderInput = {
    update: XOR<CustomerUpdateWithoutPurchaseOrderInput, CustomerUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<CustomerCreateWithoutPurchaseOrderInput, CustomerUncheckedCreateWithoutPurchaseOrderInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPurchaseOrderInput, CustomerUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type CustomerUpdateWithoutPurchaseOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Dealership?: DealershipUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    dealershipId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    update: XOR<PurchaseOrderItemUpdateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<PurchaseOrderItemCreateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemWhereUniqueInput
    data: XOR<PurchaseOrderItemUpdateWithoutPurchaseOrderInput, PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: PurchaseOrderItemScalarWhereInput
    data: XOR<PurchaseOrderItemUpdateManyMutationInput, PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderItemScalarWhereInput = {
    AND?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
    OR?: PurchaseOrderItemScalarWhereInput[]
    NOT?: PurchaseOrderItemScalarWhereInput | PurchaseOrderItemScalarWhereInput[]
    id?: IntFilter<"PurchaseOrderItem"> | number
    puchaseOrderId?: IntFilter<"PurchaseOrderItem"> | number
    productCompanyId?: IntFilter<"PurchaseOrderItem"> | number
    productId?: IntFilter<"PurchaseOrderItem"> | number
    quantity?: FloatFilter<"PurchaseOrderItem"> | number
    note?: StringNullableFilter<"PurchaseOrderItem"> | string | null
    createdAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"PurchaseOrderItem"> | Date | string
  }

  export type PurchaseOrderCreateWithoutPurchaseOrderItemInput = {
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    Customer: CustomerCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput = {
    id?: number
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    customerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderCreateOrConnectWithoutPurchaseOrderItemInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
  }

  export type PurchaseOrderUpsertWithoutPurchaseOrderItemInput = {
    update: XOR<PurchaseOrderUpdateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderItemInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderItemInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutPurchaseOrderItemInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput>
  }

  export type PurchaseOrderUpdateWithoutPurchaseOrderItemInput = {
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Customer?: CustomerUpdateOneRequiredWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutPurchaseOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    customerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateManyDealershipInput = {
    id?: number
    name: string
    street1?: string | null
    street2?: string | null
    state?: string | null
    city?: string | null
    zip?: string | null
    phone?: string | null
    email?: string | null
    isDeleted?: boolean
  }

  export type ProductCompanyCreateManyDealershipInput = {
    id?: number
    name: string
    companyType: $Enums.CompanyType
    isDeleted?: boolean
  }

  export type CustomerUpdateWithoutDealershipInput = {
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDealershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutDealershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street1?: NullableStringFieldUpdateOperationsInput | string | null
    street2?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCompanyUpdateWithoutDealershipInput = {
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    SeedProduct?: SeedProductUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateWithoutDealershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    SeedProduct?: SeedProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    BayerProduct?: BayerProductUncheckedUpdateManyWithoutProductCompanyNestedInput
    RegularProduct?: RegularProductUncheckedUpdateManyWithoutProductCompanyNestedInput
  }

  export type ProductCompanyUncheckedUpdateManyWithoutDealershipInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyType?: EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderCreateManyCustomerInput = {
    id?: number
    purchaseOrderName?: string | null
    isQuote: boolean
    isSimple: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type PurchaseOrderUpdateWithoutCustomerInput = {
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    PurchaseOrderItem?: PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchaseOrderName?: NullableStringFieldUpdateOperationsInput | string | null
    isQuote?: BoolFieldUpdateOperationsInput | boolean
    isSimple?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeedProductCreateManyProductCompanyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type BayerProductCreateManyProductCompanyInput = {
    id?: number
    trait: string
    variety: string
    treatment: string
    seedSize: string
    packaging: string
    cropType: $Enums.CropType
    productDetail: string
    dealerPricing: number
    endUserPricing: number
    agiisId: string
    sapId: string
    isDeleted?: boolean
  }

  export type RegularProductCreateManyProductCompanyInput = {
    id?: number
    product: string
    type?: string | null
    description?: string | null
    dealerPricing: number
    endUserPricing: number
    isDeleted?: boolean
  }

  export type SeedProductUpdateWithoutProductCompanyInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeedProductUncheckedUpdateWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeedProductUncheckedUpdateManyWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BayerProductUpdateWithoutProductCompanyInput = {
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BayerProductUncheckedUpdateWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BayerProductUncheckedUpdateManyWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trait?: StringFieldUpdateOperationsInput | string
    variety?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    seedSize?: StringFieldUpdateOperationsInput | string
    packaging?: StringFieldUpdateOperationsInput | string
    cropType?: EnumCropTypeFieldUpdateOperationsInput | $Enums.CropType
    productDetail?: StringFieldUpdateOperationsInput | string
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    agiisId?: StringFieldUpdateOperationsInput | string
    sapId?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegularProductUpdateWithoutProductCompanyInput = {
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegularProductUncheckedUpdateWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegularProductUncheckedUpdateManyWithoutProductCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dealerPricing?: FloatFieldUpdateOperationsInput | number
    endUserPricing?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderItemCreateManyPurchaseOrderInput = {
    id?: number
    productCompanyId: number
    productId: number
    quantity: number
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseOrderItemUpdateWithoutPurchaseOrderInput = {
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCompanyId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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