import { cloneDeep } from "lodash";
import { Interface } from "readline";


/**
 * about this code
 * --------------
 * first of all lets define 'dependency' , of every class B that 'have a class A that depend on it in order to work' is a 'dependeny' 
 * but, dependency ijection (consume all 'popular' dependecies into one module, then distribure to all dependents from that module) 
 * isn't very relevant to a 'non popular' dependecies, if a class have one or two dependents, it will be berrer to simply import it
 * in the the dependents code, and set it directly as a default value for one of the constructor params 
 * (of course still not coupilng it directly with the code)
 * 
 * there is multiple ways of dependencies distribution, a simple object that being send, a static class, an instances, singleton, prototype pattern..)
 * for simplisity and to take advantage of the pareto principle (20% of the job gains 80% of profits) we will use only 4 ways of distribution
 *  1. distribute the dependency as a static class (such as the 'JSON' class or 'lodash'), mostly utilities
 *  2. distribute the dependency as an Object (such as mappings, enums, dictioneries of configs, etc.)
 *  3. distribute the dependency by initializing and a new instance of the dependency for every consumer module
 *  4. distribute the dependency by initializing a singleton once on the server startup and then send the same object every time
 * 
 * 
 * about the client of this code
 * -----------------------------
 * each function / method / module / constructor might need
 * 
 * primitive parameter with / without a default
 * a broadly used dependency (logger, central congfig, utilities, hasher, token generator...)
 * ? a diffrent method from same class?
 * ? a diffrent class that is used only in this class
 */




/**
 * client code:
 * constructor(
 *  private notPopularImplementation: mightBePopularInterface = (new) NotPopularImplementation() /.singleton() / .prototype(implementation params) / any other creational pattern
 *  private popularImplementation: popularInterface = dependencyIndex.popularInterface()
 * ){}
 */ 




class DependencyIndex{
    
    //singleton
    private constructor(){}
    private static singletonInstance:DependencyIndex
    public static instance(){
        if (!DependencyIndex.singletonInstance) {
            DependencyIndex.singletonInstance = new DependencyIndex()
        }
        return this.singletonInstance
    }


    public doingA():doingA{ 
        return ExampleOfSingletonDependency.instance() // example of a dependency being distributed as a sigleton (ether the class take care of the singleton pattern such as here, but this function could hold an instance and spred it as sigleton as well)
    }

    public doingB():doingB{
        return new ExampleOfNewInstanceDependency()
    }

    public havingPropertyC():havingPropertyC{
        return  exampleOfObjectDependency
    }

    public doingD():doingD{
        return ExampleOfStaticClassDependency
    }

}

export const dependencyIndex = DependencyIndex.instance()


/**
 * all of the interfaces/types below asumed to be imported from other modules
 */

interface doingA{
    A(input:any):any
}

interface doingB{
    B(input:any):any
}

interface havingPropertyC{
    C:any,
    [key: string]: any
}

interface doingD{
    D(input):any
}


/**
 * all of the classes below asumed to be imported from other modules
 */

/**
 * let's see 'ExampleOfSingletonDependency' as a singleton instance such as DB-connection / logger / hasher (if not static)/ cash connection / etc..
 */
class ExampleOfSingletonDependency implements doingA{
    private constructor(){}
    private static singletonInstance:ExampleOfSingletonDependency 
    public static instance(){
        if (!ExampleOfSingletonDependency.instance){
            ExampleOfSingletonDependency.singletonInstance = new ExampleOfSingletonDependency()
        }
        return ExampleOfSingletonDependency.singletonInstance
    }

    public A(input:any):any{
        return 'some value or null or whatever'
    }

}

/**
 * let's see 'ExampleOfNewInstanceDependency' as an object being built every time as an helper object to for to some DAL function
 */
class ExampleOfNewInstanceDependency implements doingB{
    public B(input:any):any{
        return 'some value or null or whatever'
    }
}

/** 
 * let's see 'exampleOfObjectDependency' as a main app configs object or an enum that alot of classes needs
 */
const exampleOfObjectDependency:havingPropertyC = {
    C:'some value',
    onePropery: 'some other value',
    anoterProperty : 0,
}

/**
 * let see 'ExampleOfStaticClassDependency' as an static utilites class dependencty / factory class dependency /  or any other scenario that the dependency is the class insted of an instance of the class
 */
class ExampleOfStaticClassDependency{

    static D(input:any):any{
        return 'some value or null or whatever'
    }

}


